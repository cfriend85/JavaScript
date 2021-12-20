const now = new Date(Date.now());

const greet = (myName) => {
    if(myName === "Anakin"){
        return `Good Day Anakin, the current date and time is ${now}`
    } else if(myName === "Count Dooku"){
        return `Today is ${now} and your time is coming Dooku!`
    } else {
        return "This is not the droid we're looking for"
    }
}

console.log(greet("Anakin"));
console.log(greet("Count Dooku"));
console.log(greet("C3PO"));