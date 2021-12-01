// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1,2,3...,n}. 
// We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.
// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

const getMaxLessThanK = (n, k) => {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}


// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. 
// Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
// For example, the day name for the date 12/07/2016 is Wednesday.

const getDayName = (dateString) => {
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return dayNames[new Date(dateString).getDay()]
}
