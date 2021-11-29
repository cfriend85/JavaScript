const camelCase = (s) => {
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if (s[i].match(new RegExp("[A-Z]"))) {
            count += 1
        }
    }
    return count
}

console.log(camelCase('saveChangesInTheEditor'))