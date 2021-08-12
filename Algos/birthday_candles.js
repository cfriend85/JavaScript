const birthdayCakeCandles = (candles) => {
    candles.sort()
    let count = 0
    let max = 0
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max){
            max = candles[i]
            count = 1
        }
        else if (candles[i] == max){
            count +=1
        }
    }
    return count
}