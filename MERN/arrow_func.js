function nameofFunc(){
    console.log("blah blah blah normal function")
}

nameofFunc()

const otherFunc = (word) => {
    console.log(`your word is: ${word}`)
}

const callAnotherFunction = (func) => {
    func();
}
callAnotherFunction(()=>(console.log("whoa this kinda complicated")))

otherFunc('Goulet')

var otherFunct = (word) => {
    console.log(`your word is: ${word}`)
}

const returnEight = () => 8;
const returnNine = () => console.log("This is a single line function!")
const returnEight2 = () => {
console.log("multi line functions require curly braces!");
console.log("This is line 2!")
}

const squareMe = (num) => num * num;
const addMe = (num1, num2) => num1 + num2

returnEight2();
otherFunc("Goulet");
otherFunct = 7;
console.log(otherFunct);
console.log(returnEight());
returnNine();
console.log(squareMe(8));
console.log(addMe(8,7))