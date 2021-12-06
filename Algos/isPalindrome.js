const isPalindrome = (inputString) => {
    for(let i = 0; i < inputString.length; i++){
        for(let j = inputString.length-1; j > 0; j--){
            if (inputString[i] === inputString[j]) {
                i++
            } else{
                return false
            }
        }
    }
    return true
}


console.log(isPalindrome('aabaa'))
console.log(isPalindrome('charles'))