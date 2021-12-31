// Consider an array of numeric strings where each string is a positive number with anywhere from 1 to 10(to the 6th power) digits. 
// Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.


const bigSorting = (unsorted) => {
    return unsorted.sort((a,b) => {
        if(a.length != b.length){
            return a.length  - b.length;
        }  else {
            for(let i = 0; i < a.length; i++){
                if(a[i] < b[i]){
                    return -1;
                } else if(a[i] > b[i]){
                    return 1;
                }
            }
            return 0;
        }
    })
}