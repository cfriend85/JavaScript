const regexVar = () => {
/*
* Declare a RegExp object variable named 're'
* It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
*/
    let re = new RegExp(/^([aeiou]).*\1$/i)
    return re;
}


const regexVarTwo = () => {
/*
* Declare a RegExp object variable named 're'
* It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
* followed by one or more letters.
*/
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
    return re;
}

const regexVarThree = () => {
/*
* Declare a RegExp object variable named 're'
* It must match ALL occurrences of numbers in a string.
*/
    let re = new RegExp('\\d+', 'g');
    return re;
}