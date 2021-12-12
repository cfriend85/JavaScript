const combineArr = (arr1, arr2) => {
    let i = 0
    let y = 0
    let result = []
    while(i < arr1.length && y < arr2.length){
        if(arr1[i] < arr2[y]){
            result.push(arr1[i])
            i++
        } else{
            result.push(arr2[y])
            y++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(y < arr2.length){
        result.push(arr2[y])
        y++
    }
    return result
}

const merge = (arr) =>{
    //escape
    if(arr.length == 1){
        return arr
    }
    //iteration
    let left = arr.slice(0, Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))
    return (combineArr(merge(left),merge(right)))
}

console.log(merge([22,15,77,51,38,143,55,61,54,99,27]))