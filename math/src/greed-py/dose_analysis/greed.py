import pandas as pd
from scipy.stats import beta
from scipy.stats import median_abs_deviation
import json


DATASET_CSV_EXAMPLE = """
    ```
    _id,weight,amount,units,method,substance,weight_amount,weight_units
6713f40ce3cdbd5675cbb5b3,"{'amount': 170, 'units': lb}",2,mg,oral,Triazolam,170,lb
6713f40ce3cdbd5675cbb5b4,"{'amount': 170, 'units': lb}",30,mg,sublingual,Lidocaine,170,lb
6713f40ce3cdbd5675cbb5b5,"{'amount': 170, 'units': lb}",500,mg,oral,Naproxen,170,lb
6713f40ce3cdbd5675cbb5b6,"{'amount': 170, 'units': lb}",500,mg,oral,Naproxen,170,lb
6713f40ce3cdbd5675cbb5b7,"{'amount': 170, 'units': lb}",500,mg,oral,Naproxen,170,lb
    ...
    ...
    ...
    ```
"""

clean_dfl = pd.read_csv("DATASET.CSV")
valid_units = ["mg", "µg", "g", "ml"]
filtered_df = clean_dfl[clean_dfl["units"].isin(valid_units)].copy()


def calculate_reliability_score(group):
    sample_size = len(group)
    max_sample_size = 10
    size_score = min(1, sample_size / max_sample_size)

    # rel score based on coefficient of variation
    cv = group["amount"].std() / group["amount"].mean()
    consistency_score = max(0, 1 - cv)
    completeness = group["amount"].notna().mean()

    reliability_score = (
        (size_score * 0.5) + (consistency_score * 0.3) + (completeness * 0.2)
    )
    return reliability_score


filtered_df["amount_standard"] = filtered_df["amount"]


def detect_outliers_modified_zscore(group):
    """Removes outliers using the Modified Z-score method."""
    group = group[group["amount_standard"] > 0]
    median = group["amount_standard"].median()
    mad = median_abs_deviation(group["amount_standard"], scale="normal")
    if mad == 0:
        return group
    modified_z_scores = 0.6745 * (group["amount_standard"] - median) / mad
    threshold = 3.5 # this needs tuning?
    
    return group[np.abs(modified_z_scores) <= threshold]


filtered_df_no_outliers = (
    filtered_df.groupby(["substance", "method", "units"])
    .apply(detect_outliers_modified_zscore)
    .reset_index(drop=True)
)


def calculate_percentile_confidence_interval(data, percentile, alpha=0.05):  # 99th perc
    n = len(data)
    if n == 0:
        return (np.nan, np.nan)
    sorted_data = np.sort(data)
    k = int(np.ceil(n * percentile))
    if k == 0 or n - k + 1 <= 0:
        return (np.nan, np.nan)
    lower_bound = beta.ppf(alpha / 2, k, n - k + 1)
    upper_bound = beta.ppf(1 - alpha / 2, k, n - k + 1)
    lower_index = int(np.floor(lower_bound * n))
    upper_index = int(np.ceil(upper_bound * n)) - 1
    lower_value = sorted_data[max(0, lower_index)]
    upper_value = sorted_data[min(n - 1, upper_index)]
    return (lower_value, upper_value)


def compute_dose_tiers(group):
    amounts = group["amount_standard"].dropna().values
    if len(amounts) < 10:
        return pd.Series(dtype="float64")
    percentiles = [0.05, 0.25, 0.50, 0.75, 0.95]
    labels = ["Threshold", "Light", "Common", "Strong", "Heavy"]
    sorted_amounts = np.sort(amounts)
    n = len(amounts)
    result = {}
    for p, label in zip(percentiles, labels):
        value = np.percentile(sorted_amounts, p * 100)
        ci_lower, ci_upper = calculate_percentile_confidence_interval(amounts, p)
        result[label] = value
        result[f"{label} CI Lower"] = ci_lower
        result[f"{label} CI Upper"] = ci_upper
    reliability_score = calculate_reliability_score(group)
    result["Reliability Score (0 to 1)"] = reliability_score
    result["Unit"] = group["units"].iloc[0]
    return pd.Series(result)


dose_tiers_with_reliability = filtered_df_no_outliers.groupby(
    ["substance", "method", "units"]
).apply(compute_dose_tiers)


def dose_tiers_to_json(df):
    json_data = []

    for (substance, method, units), group in df.groupby(level=[0, 1, 2]):
        group = group.droplevel([0, 1, 2])
        tier_data = {
            "substance": substance,
            "method": method,
            "unit": units,
            "tiers": {
                "Threshold": {
                    "value": group.get("Threshold"),
                    "CI Lower": group.get("Threshold CI Lower"),
                    "CI Upper": group.get("Threshold CI Upper"),
                },
                "Light": {
                    "value": group.get("Light"),
                    "CI Lower": group.get("Light CI Lower"),
                    "CI Upper": group.get("Light CI Upper"),
                },
                "Common": {
                    "value": group.get("Common"),
                    "CI Lower": group.get("Common CI Lower"),
                    "CI Upper": group.get("Common CI Upper"),
                },
                "Strong": {
                    "value": group.get("Strong"),
                    "CI Lower": group.get("Strong CI Lower"),
                    "CI Upper": group.get("Strong CI Upper"),
                },
                "Heavy": {
                    "value": group.get("Heavy"),
                    "CI Lower": group.get("Heavy CI Lower"),
                    "CI Upper": group.get("Heavy CI Upper"),
                },
            },
            "reliability_score": group.get("Reliability Score (0 to 1)"),
        }
        json_data.append(tier_data)

    return json.dumps(json_data, indent=4)


dose_tiers_json = dose_tiers_to_json(dose_tiers_with_reliability)
print(dose_tiers_json)
