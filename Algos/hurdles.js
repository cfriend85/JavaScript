const hurdles = (k, height) => {
    let max = Math.max(...height)
    return max > k? max-k : 0;
}

console.log(hurdles(4, [1,6,3,5,2]))