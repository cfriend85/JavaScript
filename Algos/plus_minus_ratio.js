const plusMinus = (arr) => {
    let x = arr.length
    let pos = 0
    let neg = 0
    let zero = 0
    for(let i = 0; i < x; i++){
        if(arr[i] > 0){
            pos += 1
        }
        else if(arr[i] < 0){
            neg += 1
        }
        else
            zero += 1
    }
    let posRatio = pos / x
    let negRatio = neg / x
    let zeroRatio = zero / x
    console.log(posRatio.toFixed(6))
    console.log(negRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}