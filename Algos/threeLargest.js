// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three
// largest integers in the input array.

// The function should return duplicate integers if neccessary; for example, it should return [10,10,12] for an input array of [10,5,9,10,12]



const threeLargest = (array) => {
    const newArr = array;
    return newArr.sort((num1, num2) => num1 - num2).slice(-3);
}


console.log(threeLargest([10,5,9,10,12]));
console.log(threeLargest([141,1,17,-7,-17,-27,18,541,8,7,7]));