// Given an array with five values calculate the minimum & maximum sum
function miniMaxSum(arr) {
    arr.sort()
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum - arr[4], sum - arr[0])

}