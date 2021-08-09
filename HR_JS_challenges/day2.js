const getArea = (length, width) => {
    let area = length * width
    return area;
}

const getPerimeter = (length, width) => {
    let perimeter = length * 2 + width * 2
    return perimeter;
}

const factorial = (n) => {
    let temp = n
    if(n == 0){
        n = 1
    }
    else{
        for(let i = n-1; i > 0; i--){
            temp *= i
        }
    }
    return temp
}

const vowelsAndConsonants= (s) => {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}

const circle = (r) => {
const PI = Math.PI;
console.log(PI*r*r);
console.log(PI*2*r);
}