import pandas as pd
import numpy as np
import json
from scipy import stats
from .dose_analysis_cy import detect_outliers_modified_zscore_cy, compute_dose_tiers_cy

DATASET_CSV_PATH = "data/DATASET.CSV"
valid_units = ["mg", "µg", "g", "ml"]

# Substances known to have exponential dose-response curves
EXPONENTIAL_SUBSTANCES = {
    'LSD', 'Psilocybin', 'DMT', 'Salvia divinorum', '5-MeO-DMT', 
    'NBOMe', 'Methamphetamine', 'Amphetamine', 'Fentanyl',
}

def load_and_preprocess_data(file_path):
    df = pd.read_csv(file_path)
    filtered_df = df[df["units"].isin(valid_units)].copy()
    filtered_df["amount_standard"] = filtered_df["amount"]
    filtered_df["distribution_type"] = filtered_df.apply(
        lambda x: 'exponential' if x['substance'] in EXPONENTIAL_SUBSTANCES else 'standard', 
        axis=1
    )
    return filtered_df

def calculate_enhanced_reliability_score(group):
    sample_size = len(group)
    min_reliable_sample = 30  # Increased from 15
    max_reliable_sample = 100
    
    # Sigmoid scaling for sample size
    size_factor = (sample_size - min_reliable_sample) / (max_reliable_sample - min_reliable_sample)
    size_score = 1 / (1 + np.exp(-size_factor * 6))
    
    # Use robust statistics for consistency
    amounts = group["amount"].values
    mad = stats.median_abs_deviation(amounts)
    median = np.median(amounts)
    robust_cv = mad / median if median != 0 else np.inf
    consistency_score = max(0, 1 - robust_cv)
    
    # Data completeness
    completeness = group["amount"].notna().mean()
    
    # Final weighted score
    reliability_score = (
        size_score * 0.5 +           # Increased weight for sample size
        consistency_score * 0.4 +     # Increased weight for consistency
        completeness * 0.1           # Maintained weight for completeness
    )
    
    return reliability_score

def detect_outliers_modified_zscore(group):
    """Maintain original Cython-optimized outlier detection"""
    original_values = group['amount_standard'].values
    
    # Log transform if exponential distribution
    if group['distribution_type'].iloc[0] == 'exponential' and np.all(original_values > 0):
        transformed_values = np.log(original_values)
        filtered_transformed = detect_outliers_modified_zscore_cy(transformed_values)
        mask = np.isin(transformed_values, filtered_transformed)
    else:
        filtered_values = detect_outliers_modified_zscore_cy(original_values)
        mask = np.isin(original_values, filtered_values)
    
    return group[mask]

def compute_dose_tiers(group):
    amounts = group['amount_standard'].dropna().values
    if len(amounts) < 30:  # Increased minimum sample size
        return pd.Series(dtype='float64')
    
    # Handle exponential distributions
    dist_type = group['distribution_type'].iloc[0]
    if dist_type == 'exponential' and np.all(amounts > 0):
        transformed_amounts = np.log(amounts)
        results = compute_dose_tiers_cy(transformed_amounts)
        results = np.exp(results)  # Transform back to original scale
    else:
        results = compute_dose_tiers_cy(amounts)
    
    min_amount = amounts.min()
    max_amount = amounts.max()
    
    labels = ['Threshold', 'Light', 'Common', 'Strong', 'Heavy']
    result = {}
    
    thresholds = [min_amount, results[0], results[3], results[6], results[9], max_amount]
    ci_lowers = [np.nan, results[1], results[4], results[7], results[10], np.nan]
    ci_uppers = [np.nan, results[2], results[5], results[8], results[11], np.nan]
    
    for i, label in enumerate(labels):
        result[f'{label} Lower'] = thresholds[i]
        result[f'{label} Upper'] = thresholds[i+1]
        result[f'{label} CI Lower'] = ci_lowers[i]
        result[f'{label} CI Upper'] = ci_uppers[i]
    
    # Add enhanced metadata
    result['Reliability Score (0 to 1)'] = calculate_enhanced_reliability_score(group)
    result['Distribution Type'] = dist_type
    result['Sample Size'] = len(amounts)
    result['Unit'] = group['units'].iloc[0]
    
    return pd.Series(result)

def dose_tiers_to_json(df):
    json_data = []
    for (substance, method, units), group in df.groupby(level=[0, 1, 2]):
        group = group.droplevel([0, 1, 2])
        tiers = {}
        labels = ['Threshold', 'Light', 'Common', 'Strong', 'Heavy']
        for label in labels:
            tiers[label] = {
                "Lower": group.get(f"{label} Lower"),
                "Upper": group.get(f"{label} Upper"),
                "CI Lower": group.get(f"{label} CI Lower"),
                "CI Upper": group.get(f"{label} CI Upper"),
            }
        tier_data = {
            "substance": substance,
            "method": method,
            "unit": units,
            "tiers": tiers,
            "reliability_score": group.get("Reliability Score (0 to 1)"),
            "distribution_type": group.get("Distribution Type"),
            "sample_size": group.get("Sample Size")
        }
        json_data.append(tier_data)
    return json.dumps(json_data, indent=4)

def main():
    filtered_df = load_and_preprocess_data(DATASET_CSV_PATH)

    # Remove outliers
    filtered_df_no_outliers = filtered_df.groupby(
        ["substance", "method", "units"]
    ).apply(detect_outliers_modified_zscore).reset_index(drop=True)

    # Calculate dose tiers
    dose_tiers_with_reliability = filtered_df_no_outliers.groupby(
        ["substance", "method", "units"]
    ).apply(compute_dose_tiers)

    # Convert to JSON and save
    dose_tiers_json = dose_tiers_to_json(dose_tiers_with_reliability)

    print(dose_tiers_json)
    with open('dose_tiers_output.json', 'w') as f:
        f.write(dose_tiers_json)

if __name__ == "__main__":
    main()