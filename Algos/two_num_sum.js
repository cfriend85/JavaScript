const twoNumSum = (arr, target) => {
    var newArr = []
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                newArr.push(arr[i], arr[j])
                }
            }
        }
    return newArr
}
console.log(twoNumSum([3,5,-4,8,11,1,-1,6], 10))



