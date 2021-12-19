const fizzBuzz = (n) => {
    let newArr = [];
    if(isNaN(n) || n < 0) {
        return "Parameter must be a positive number!"
    }

    for(let i = 0; i <= n; i++){
        if (i % 5 == 0 && i % 3 == 0) {
            newArr.push("FizzBuzz")
        } else if (i % 5 == 0) {
            newArr.push("Buzz")
        } else if (i % 3 == 0) {
            newArr.push("Fizz")
        } else {
            newArr.push(i)
        }
    }
    return newArr.toString().replace(/,(?=[^\s])/g, ", ");
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(-1))