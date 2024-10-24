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
    cdef int m = positive_amounts.size()
    if m % 2 == 0:
        median = (positive_amounts[m // 2 - 1] + positive_amounts[m // 2]) / 2.0
    else:
        median = positive_amounts[m // 2]

    # Calculate MAD (Median Absolute Deviation)
    cdef vector[DTYPE_t] abs_deviations
    for i in range(m):
        abs_deviations.push_back(fabs(positive_amounts[i] - median))

    # Sort abs_deviations in-place using std::sort
    sort(abs_deviations.begin(), abs_deviations.end())  # C++ std::sort

    # Compute MAD
    if m % 2 == 0:
        mad = (abs_deviations[m // 2 - 1] + abs_deviations[m // 2]) / 2.0
    else:
        mad = abs_deviations[m // 2]

    if mad == 0:
        return np.array(positive_amounts, dtype=np.float64)  # No outliers if MAD is 0

    # Use a Cython vector to store filtered values
    cdef vector[DTYPE_t] filtered

    for i in range(m):
        modified_z_score = 0.6745 * (positive_amounts[i] - median) / mad
        if fabs(modified_z_score) <= threshold:
            filtered.push_back(positive_amounts[i])

    return np.array(filtered, dtype=np.float64)

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
        ci_lower[j] = np.percentile(bootstrapped_percentiles[:, j], 2.5)
        ci_upper[j] = np.percentile(bootstrapped_percentiles[:, j], 97.5)

    # Calculate the original percentiles (without bootstrapping) from the original amounts
    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles = np.percentile(amounts, percentiles * 100)

    return original_percentiles, ci_lower, ci_upper

@cython.boundscheck(False)
@cython.wraparound(False)
def compute_dose_tiers_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    """
    Computes dose tiers with adjusted percentiles for non-overlapping ranges,
    applying a log transformation to handle skewness in the data.
    """
    cdef int n = amounts.shape[0]
    cdef int i

    if n < 15:
        return np.array([np.nan] * 15)  # Updated to match num_percentiles * 3

    # Apply log transformation to amounts
    cdef np.ndarray[DTYPE_t, ndim=1] log_amounts = np.log(amounts + 1e-8)  # Adding small constant to avoid log(0)

    # Adjusted percentiles for non-overlapping tiers
    cdef np.ndarray[DTYPE_t, ndim=1] percentiles = np.array([0.05, 0.25, 0.50, 0.75, 0.95], dtype=np.float64)
    cdef int num_percentiles = percentiles.shape[0]

    # Initialize results array
    cdef np.ndarray[DTYPE_t, ndim=1] results = np.zeros(num_percentiles * 3, dtype=np.float64)

    # Use bootstrapping for confidence intervals on log-transformed data
    cdef np.ndarray[DTYPE_t, ndim=1] original_percentiles
    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper

    original_percentiles, ci_lower, ci_upper = bootstrap_percentiles(log_amounts, percentiles)

    # Back-transform the percentile values
    cdef np.ndarray[DTYPE_t, ndim=1] percentile_values = np.exp(original_percentiles) - 1e-8
    cdef np.ndarray[DTYPE_t, ndim=1] ci_lower_values = np.exp(ci_lower) - 1e-8
    cdef np.ndarray[DTYPE_t, ndim=1] ci_upper_values = np.exp(ci_upper) - 1e-8

    # Populate the results array with the back-transformed percentiles and confidence intervals
    for i in range(num_percentiles):
        results[i * 3] = percentile_values[i]
        results[i * 3 + 1] = ci_lower_values[i]
        results[i * 3 + 2] = ci_upper_values[i]

    return results
