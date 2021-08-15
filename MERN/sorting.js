const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); this will throw an error 

const sortedItems = [...items].sort();
// This will return "items" in a sorted manor


// Sorting Numbers

// Ascending
const points = [40, 100, 1, 5, 25, 10].sort((a, b) => a-b); // initialize and sort variable with implied return on ONE LINE

// const points = [40, 100, 1, 5, 25, 10].sort((a, b) => {return a-b}); // initialize and sort variable with explicit return on ONE LINE


// modify and sort after initialization of variable.

// const points = [40, 100, 1, 5, 25, 10]
// points.sort((a, b) => {return a-b}); 


// Descending
const morePoints = [40, 100, 1, 5, 25, 10].sort((a, b) =>  b-a); // initialize and sort variable with implied return on ONE LINE

// const morePoints = [40, 100, 1, 5, 25, 10].sort((a, b) => {return b-a}); // initialize and sort variable with explicit return on ONE LINE

// modify and sort after initialization of variable.

// const points = [40, 100, 1, 5, 25, 10]
// morePoints.sort((a, b) => {return b-a});

console.log(points) 
console.log(morePoints) 