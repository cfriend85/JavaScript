const adjacent_product = (arr) => {
    let product = arr[0] * arr[1];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] * arr[i+1] > product) {
            product = arr[i] * arr[i+1]
        }
    }
    return product;
}


console.log(adjacent_product([1,2,3,4,5]))
console.log(adjacent_product([-23, 4, -3, 8, -12]))