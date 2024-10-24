import pandas as pd
import numpy as np
import json
from .dose_analysis_cy import detect_outliers_modified_zscore_cy, compute_dose_tiers_cy

DATASET_CSV_PATH = "data/DATASET.CSV"
valid_units = ["mg", "µg", "g", "ml"]

def load_and_preprocess_data(file_path):
    df = pd.read_csv(file_path)
    filtered_df = df[df["units"].isin(valid_units)].copy()
    filtered_df["amount_standard"] = filtered_df["amount"]
    return filtered_df

def calculate_reliability_score(group):
    sample_size = len(group)
    max_sample_size = 15
    size_score = min(1, sample_size / max_sample_size)
    mean_amount = group["amount"].mean()
    std_amount = group["amount"].std()
    cv = std_amount / mean_amount if mean_amount != 0 else np.inf
    consistency_score = max(0, 1 - cv)
    completeness = group["amount"].notna().mean()
    reliability_score = (size_score * 0.6) + (consistency_score * 0.3) + (completeness * 0.1)
    return reliability_score

def detect_outliers_modified_zscore(group):
    original_values = group['amount_standard'].values
    filtered_values = detect_outliers_modified_zscore_cy(original_values)
    mask = np.isin(original_values, filtered_values)
    return group[mask]

def compute_dose_tiers(group):
    amounts = group['amount_standard'].dropna().values
    if len(amounts) < 15:
        return pd.Series(dtype='float64')
    
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
    
    reliability_score = calculate_reliability_score(group)
    result['Reliability Score (0 to 1)'] = reliability_score
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
        }
        json_data.append(tier_data)
    return json.dumps(json_data, indent=4)

def main():
    filtered_df = load_and_preprocess_data(DATASET_CSV_PATH)

    # Remove outliers
    filtered_df_no_outliers = filtered_df.groupby(["substance", "method", "units"]).apply(detect_outliers_modified_zscore).reset_index(drop=True)

    dose_tiers_with_reliability = filtered_df_no_outliers.groupby(["substance", "method", "units"]).apply(compute_dose_tiers)

    dose_tiers_json = dose_tiers_to_json(dose_tiers_with_reliability)

    print(dose_tiers_json)
    with open('dose_tiers_output.json', 'w') as f:
        f.write(dose_tiers_json)

if __name__ == "__main__":
    main()
