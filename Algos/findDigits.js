const findDigits = (n) => {
    let myNum = n.toString()
    let count = 0;
    for(let i = 0; i < myNum.length; i++){
        if (n % parseInt(myNum[i]) == 0) {
            count++
        }
    }
    return count;
}

// An integer d is a divisor of an integer n if the remainder of n/d=0.

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.