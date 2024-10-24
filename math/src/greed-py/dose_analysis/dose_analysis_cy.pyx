# distutils: language = c++
# distutils: extra_compile_args = -std=c++11

import numpy as np
cimport numpy as np
cimport cython
from libc.math cimport isnan, fabs
from libcpp.vector cimport vector
from libcpp.algorithm cimport sort

ctypedef np.float64_t DTYPE_t

cdef int BOOTSTRAP_SAMPLES = 1000

@cython.boundscheck(False)
@cython.wraparound(False)
def detect_outliers_modified_zscore_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    """
    Optimized version of detecting outliers using the modified Z-score method.
    """
    cdef int n = amounts.shape[0]
    cdef DTYPE_t median, mad, modified_z_score
    cdef DTYPE_t threshold = 3.5
    cdef int i

    cdef vector[DTYPE_t] positive_amounts

    for i in range(n):
        if amounts[i] > 0:
            positive_amounts.push_back(amounts[i])

    if positive_amounts.size() == 0:
        return np.array([], dtype=np.float64)

    sort(positive_amounts.begin(), positive_amounts.end())

    cdef int m = positive_amounts.size()
    if m % 2 == 0:
        median = (positive_amounts[m // 2 - 1] + positive_amounts[m // 2]) / 2.0
    else:
        median = positive_amounts[m // 2]

    # Calculate MAD (Median Absolute Deviation)
    cdef vector[DTYPE_t] abs_deviations
    for i in range(m):
        abs_deviations.push_back(fabs(positive_amounts[i] - median))
    sort(abs_deviations.begin(), abs_deviations.end())
    if m % 2 == 0:
        mad = (abs_deviations[m // 2 - 1] + abs_deviations[m // 2]) / 2.0
    else:
        mad = abs_deviations[m // 2]
    if mad == 0:
        return np.array(positive_amounts, dtype=np.float64)  # No outliers if MAD is 0

    cdef vector[DTYPE_t] filtered

    for i in range(m):
        modified_z_score = 0.6745 * (positive_amounts[i] - median) / mad
        if fabs(modified_z_score) <= threshold:
            filtered.push_back(positive_amounts[i])

    return np.array(filtered, dtype=np.float64)

@cython.boundscheck(False)
@cython.wraparound(False)
def calculate_percentile_confidence_interval_cy(np.ndarray[DTYPE_t, ndim=1] data, DTYPE_t percentile, DTYPE_t alpha=0.05):
    """
    Calculates confidence intervals for a percentile using the beta distribution method.
    """
    cdef int n = data.shape[0]
    cdef int k
    cdef DTYPE_t lower_bound, upper_bound
    cdef int lower_index, upper_index

    if n == 0:
        return np.nan, np.nan

    data.sort()

    k = int(np.ceil((n + 1) * percentile))

    from scipy.stats import beta
    lower_bound = beta.ppf(alpha / 2, k, n - k + 1)
    upper_bound = beta.ppf(1 - alpha / 2, k, n - k + 1)

    lower_index = max(0, int(np.floor(lower_bound * n)) - 1)
    upper_index = min(n - 1, int(np.ceil(upper_bound * n)) - 1)

    return data[lower_index], data[upper_index]


@cython.boundscheck(False)
@cython.wraparound(False)
def bootstrap_percentiles(np.ndarray[DTYPE_t, ndim=1] amounts, np.ndarray[DTYPE_t, ndim=1] percentiles):
    """
    Bootstrapping for percentile calculations and confidence intervals.
    """
    cdef int n = amounts.shape[0]
    cdef int p = percentiles.shape[0]  # Number of percentiles
    cdef np.ndarray[DTYPE_t, ndim=2] bootstrapped_percentiles = np.zeros((BOOTSTRAP_SAMPLES, p), dtype=np.float64)
    cdef int i, j
    np.random.seed(42)

    for i in range(BOOTSTRAP_SAMPLES):
        resampled = np.random.choice(amounts, size=n, replace=True)
        for j in range(p):
            bootstrapped_percentiles[i, j] = np.percentile(resampled, percentiles[j] * 100)

    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower = np.zeros(p, dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper = np.zeros(p, dtype=np.float64)
    for j in range(p):
        ci_lower[j] = np.percentile(bootstrapped_percentiles[:, j], 2.5)
        ci_upper[j] = np.percentile(bootstrapped_percentiles[:, j], 97.5)

    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles = np.percentile(amounts, percentiles * 100)

    return original_percentiles, ci_lower, ci_upper

@cython.boundscheck(False)
@cython.wraparound(False)
def compute_dose_tiers_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    """
    Main function to compute dose tiers with adjusted percentiles for non-overlapping ranges.
    Uses bootstrapping for small samples and the Beta distribution method for larger samples.
    """
    cdef int n = amounts.shape[0]
    cdef np.ndarray[DTYPE_t, ndim=1] percentiles = np.array([0.05, 0.25, 0.50, 0.75, 0.95], dtype=np.float64)
    cdef int num_percentiles = percentiles.shape[0]
    cdef np.ndarray[DTYPE_t, ndim=1] results = np.zeros(num_percentiles * 3, dtype=np.float64)
    cdef int i
    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower = np.zeros(num_percentiles, dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper = np.zeros(num_percentiles, dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles

    if n < 15:
        return np.array([np.nan] * (num_percentiles * 3))

    amounts.sort()

    if n < 75:
        original_percentiles, ci_lower, ci_upper = bootstrap_percentiles(amounts, percentiles)
    else:
        # Use Beta distribution method for confidence intervals
        original_percentiles = np.percentile(amounts, percentiles * 100)
        for i in range(num_percentiles):
            ci_lower[i], ci_upper[i] = calculate_percentile_confidence_interval_cy(amounts, percentiles[i])

    for i in range(num_percentiles):
        results[i * 3] = original_percentiles[i]
        results[i * 3 + 1] = ci_lower[i]
        results[i * 3 + 2] = ci_upper[i]

    return results
