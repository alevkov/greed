# cython: language_level=3
# distutils: language = c++

import numpy as np
cimport numpy as np
cimport cython
from libc.math cimport isnan, fabs
from libcpp.vector cimport vector

ctypedef np.float64_t DTYPE_t

@cython.boundscheck(False)
@cython.wraparound(False)
def detect_outliers_modified_zscore_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    cdef int n = amounts.shape[0]
    cdef np.ndarray[DTYPE_t, ndim=1] filtered = np.zeros(n, dtype=np.float64)
    cdef int filtered_count = 0
    cdef DTYPE_t median, mad, modified_z_score
    cdef DTYPE_t threshold = 3.5
    cdef int i

    # Remove non-positive values
    cdef vector[DTYPE_t] positive_amounts
    for i in range(n):
        if amounts[i] > 0:
            positive_amounts.push_back(amounts[i])

    if positive_amounts.size() == 0:
        return np.array([], dtype=np.float64)

    # Convert vector to numpy array for median calculation
    cdef np.ndarray[DTYPE_t, ndim=1] np_positive_amounts = np.array(positive_amounts)
    median = np.median(np_positive_amounts)
    
    # Calculate MAD
    cdef vector[DTYPE_t] abs_deviations
    for i in range(positive_amounts.size()):
        abs_deviations.push_back(fabs(positive_amounts[i] - median))
    
    mad = np.median(np.array(abs_deviations))
    
    if mad == 0:
        return np_positive_amounts

    for i in range(positive_amounts.size()):
        modified_z_score = 0.6745 * (positive_amounts[i] - median) / mad
        if fabs(modified_z_score) <= threshold:
            filtered[filtered_count] = positive_amounts[i]
            filtered_count += 1

    return filtered[:filtered_count]

@cython.boundscheck(False)
@cython.wraparound(False)
def calculate_percentile_confidence_interval_cy(np.ndarray[DTYPE_t, ndim=1] data, DTYPE_t percentile, DTYPE_t alpha=0.01):
    cdef int n = data.shape[0]
    cdef int k
    cdef DTYPE_t lower_bound, upper_bound
    cdef int lower_index, upper_index
    
    if n == 0:
        return np.nan, np.nan

    data.sort()
    k = int(np.ceil(n * percentile))
    
    if k == 0 or n - k + 1 <= 0:
        return np.nan, np.nan

    from scipy.stats import beta
    lower_bound = beta.ppf(alpha / 2, k, n - k + 1)
    upper_bound = beta.ppf(1 - alpha / 2, k, n - k + 1)
    
    lower_index = int(np.floor(lower_bound * n))
    upper_index = int(np.ceil(upper_bound * n)) - 1
    
    return data[max(0, lower_index)], data[min(n - 1, upper_index)]

@cython.boundscheck(False)
@cython.wraparound(False)
def compute_dose_tiers_cy(np.ndarray[DTYPE_t, ndim=1] amounts):
    cdef int n = amounts.shape[0]
    cdef np.ndarray[DTYPE_t, ndim=1] percentiles = np.array([0.05, 0.25, 0.50, 0.75, 0.95], dtype=np.float64)
    cdef np.ndarray[DTYPE_t, ndim=1] results = np.zeros(15, dtype=np.float64)
    cdef int i
    cdef DTYPE_t ci_lower, ci_upper
    
    if n < 10:
        return np.array([np.nan] * 15)

    amounts.sort()
    
    for i in range(5):
        results[i * 3] = np.percentile(amounts, percentiles[i] * 100)
        ci_lower, ci_upper = calculate_percentile_confidence_interval_cy(amounts, percentiles[i])
        results[i * 3 + 1] = ci_lower
        results[i * 3 + 2] = ci_upper
    
    return results