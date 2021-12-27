const findMedian = (arr) => {
    return arr.sort(function(a, b){return a - b})[Math.floor(arr.length / 2)]
}
console.log(findMedian([1,2,3,4,5]))
console.log(findMedian([1,2,3,4,5,6,77,254,79,258,111,15,798,1001,55,41,498,38,15,1,396,7,51,10000,10001,52]))