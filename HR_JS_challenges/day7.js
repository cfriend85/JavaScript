// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1,2,3...,n}. 
// We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.
// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

const getMaxLessThanK = (n, k) => {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}
