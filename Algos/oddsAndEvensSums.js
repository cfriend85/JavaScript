const getOddNumbersSum = (n) => {
    let oddSum = 0;
    for(let i = 0; i < n; i++){
        if (i % 2 > 0) {
            oddSum += i;
        }
    }
    return oddSum;
}

const getEvenNumbersSum = (n) => {
    let evenSum = 0;
    for(let i = 1; i < n; i++){
        if (i % 2 == 0) {
            evenSum += i;
        }
    }
    return evenSum;
}


console.log(getOddNumbersSum(5001));
console.log(getEvenNumbersSum(5001));