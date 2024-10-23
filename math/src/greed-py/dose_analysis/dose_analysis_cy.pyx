# distutils: language = c++
# distutils: extra_compile_args = -std=c++11

import numpy as np
cimport numpy as np
cimport cython
from libc.math cimport isnan, fabs
from libcpp.vector cimport vector
from libcpp.algorithm cimport sort  # Import std::sort

ctypedef np.float64_t DTYPE_t

# Constants
cdef int BOOTSTRAP_SAMPLES = 600

@cython.boundscheck(False)
@cython.wraparound(False)
def detect_outliers_modified_zscore_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    """
    Optimized version of detecting outliers using the modified Z-score method.
    """
    cdef int n = amounts.shape[0]
    cdef int filtered_count = 0
    cdef DTYPE_t median, mad, modified_z_score
    cdef DTYPE_t threshold = 3.5
    cdef int i
    
    # Use a Cython vector for storing filtered values
    cdef vector[DTYPE_t] positive_amounts

    # Remove non-positive values and store positive values in vector
    for i in range(n):
        if amounts[i] > 0:
            positive_amounts.push_back(amounts[i])

    # Return empty array if there are no positive values
    if positive_amounts.size() == 0:
        return np.array([], dtype=np.float64)

    # Sort positive_amounts in-place using std::sort
    sort(positive_amounts.begin(), positive_amounts.end())  # C++ std::sort

    # Calculate the median
    median = positive_amounts[positive_amounts.size() // 2]  # Median as middle element

    # Calculate MAD (Median Absolute Deviation)
    cdef vector[DTYPE_t] abs_deviations
    for i in range(positive_amounts.size()):
        abs_deviations.push_back(fabs(positive_amounts[i] - median))

    # Sort abs_deviations in-place using std::sort
    sort(abs_deviations.begin(), abs_deviations.end())  # C++ std::sort
    mad = abs_deviations[abs_deviations.size() // 2]  # Median of absolute deviations
    
    if mad == 0:
        return np.array(positive_amounts, dtype=np.float64)  # No outliers if MAD is 0

    # Use a Cython vector to store filtered values
    cdef vector[DTYPE_t] filtered

    for i in range(positive_amounts.size()):
        modified_z_score = 0.6745 * (positive_amounts[i] - median) / mad
        if fabs(modified_z_score) <= threshold:
            filtered.push_back(positive_amounts[i])

    return np.array(filtered, dtype=np.float64)

@cython.boundscheck(False)
@cython.wraparound(False)
def calculate_percentile_confidence_interval_cy(np.ndarray[DTYPE_t, ndim=1] data, DTYPE_t percentile, DTYPE_t alpha=0.01):
    """
    Optimized calculation of percentile confidence intervals using the beta distribution.
    """
    cdef int n = data.shape[0]
    cdef int k
    cdef DTYPE_t lower_bound, upper_bound
    cdef int lower_index, upper_index
    
    if n == 0:
        return np.nan, np.nan

    data.sort()  # In-place sort

    k = int(np.ceil(n * percentile))
    
    if k == 0 or n - k + 1 <= 0:
        return np.nan, np.nan

    from scipy.stats import beta
    lower_bound = beta.ppf(alpha / 2, k, n - k + 1)
    upper_bound = beta.ppf(1 - alpha / 2, k, n - k + 1)

    lower_index = max(0, int(np.floor(lower_bound * n)))
    upper_index = min(n - 1, int(np.ceil(upper_bound * n)) - 1)
    
    return data[lower_index], data[upper_index]

@cython.boundscheck(False)
@cython.wraparound(False)
def bootstrap_multiple_percentiles(np.ndarray[DTYPE_t, ndim=1] amounts, np.ndarray[DTYPE_t, ndim=1] percentiles):
    """
    Optimized bootstrapping for multiple percentile calculations and confidence intervals.
    """
    cdef int n = amounts.shape[0]
    cdef int p = percentiles.shape[0]  # Number of percentiles
    cdef np.ndarray[DTYPE_t, ndim=2] bootstrapped_percentiles = np.zeros((BOOTSTRAP_SAMPLES, p), dtype=np.float64)
    cdef int i, j
    
    # Perform bootstrap resampling
    for i in range(BOOTSTRAP_SAMPLES):
        # Resample with replacement
        resampled = np.random.choice(amounts, size=n, replace=True)
        # Calculate multiple percentiles for this bootstrap sample
        for j in range(p):
            bootstrapped_percentiles[i, j] = np.percentile(resampled, percentiles[j] * 100)

    # Compute confidence intervals (2.5th and 97.5th percentiles) for each target percentile
    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower = np.zeros(p, dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper = np.zeros(p, dtype=np.float64)
    for j in range(p):
        ci_lower[j] = np.percentile(bootstrapped_percentiles[:, j], 1)
        ci_upper[j] = np.percentile(bootstrapped_percentiles[:, j], 99)

    # Calculate the original percentiles (without bootstrapping) from the original amounts
    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles = np.percentile(amounts, percentiles * 100)

    return original_percentiles, ci_lower, ci_upper


@cython.boundscheck(False)
@cython.wraparound(False)
def compute_dose_tiers_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    """
    Main function to compute dose tiers. Uses analytical methods for larger samples,
    and bootstrapping for small samples (n < 30).
    """
    cdef int n = amounts.shape[0]
    cdef np.ndarray[DTYPE_t, ndim=1] percentiles = np.array([0.05, 0.25, 0.50, 0.75, 0.95], dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] results = np.zeros(15, dtype=np.float64)
    cdef int i
    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower = np.zeros(5, dtype=np.float64)  # Initialize ci_lower for analytical block
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper = np.zeros(5, dtype=np.float64)  # Initialize ci_upper for analytical block
    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles

    if n < 10:
        return np.array([np.nan] * 15)
    
    amounts.sort()  # Sort in-place

    # Use bootstrapping if the sample size is smaller than 30
    if n < 30:
        # Call the optimized multi-percentile bootstrapping function
        original_percentiles, ci_lower, ci_upper = bootstrap_multiple_percentiles(amounts, percentiles)
        
        # Populate the results array with the bootstrapped percentiles and confidence intervals
        for i in range(5):
            results[i * 3] = original_percentiles[i]
            results[i * 3 + 1] = ci_lower[i]
            results[i * 3 + 2] = ci_upper[i]
    else:
        # Analytical approach for n >= 30
        for i in range(5):
            results[i * 3] = np.percentile(amounts, percentiles[i] * 100)
            ci_lower[i], ci_upper[i] = calculate_percentile_confidence_interval_cy(amounts, percentiles[i])
            results[i * 3 + 1] = ci_lower[i]
            results[i * 3 + 2] = ci_upper[i]
    
    return results
