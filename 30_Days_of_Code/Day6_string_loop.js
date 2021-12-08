const processString = (input) => {
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
        let evenStr = '';
        let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
}