// A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, 
// determine how many letters of the SOS message have been changed by radiation.

const marsExporation = (s) => {
    let sosCount = s.length / 3;
    let count = 0;
    let expectedString = "SOS".repeat([sosCount]);
    for(let i = 0; i < s.length; i++){
        if(expectedString[i] != s[i]){
            count++
        } 
    }
    return count;
}

console.log(marsExporation('SOSSPSSQSSQR'))
console.log(marsExporation('SOSSOT'))
console.log(marsExporation('OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS'))