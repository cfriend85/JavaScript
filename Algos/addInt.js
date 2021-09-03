// n comes in as an integer and you need to add each number together to form a sum.
// i.e. 687 should return 21

const addChar = (n) => {
    let num = n.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += parseInt(num[i]);
    }
    return sum;
}

console.log(addChar(29))