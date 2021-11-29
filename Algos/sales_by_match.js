const matches = (n, arr) => {
    let pairs = 0;
    arr.sort();
    for(let i = 0; i < n; i++){
        if (arr[i] == arr[i+1]) {
            pairs += 1;
            i++
        }
    }
    return pairs;
}

console.log(matches(9, [10,20,20,10,10,30,50,10,20]))

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.