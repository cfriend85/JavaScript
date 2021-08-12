const diagonalDifference = (arr) => {
    let x = arr.length
    let main = 0
    let sec = 0
    for(let i = 0; i < x; i++){
        main += arr[i][i]
        sec += arr[i][x-i-1]
    }
    return Math.abs(main - sec)
}