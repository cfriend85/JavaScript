const poly = (n) => {
    let test = ((n-1) * (n-1))
    let result = test + n * n
    return result
}


console.log(poly(3));
console.log(poly(2));
console.log(poly(4));