// JS MAP - Think array.each do |num| "thing to do with num" end
// Only MAP makes a COPY of the array.
// const groceryList = groceries.map( item => console.log(item));
const mapGroceries = ["pearl onions", "cremini mushrooms", "thyme"].map(item => console.log(item));
const mapValues = [1, 2, 3, 4, 5].map(val => console.log(val));

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => console.log(val**3));


//JS FILTER


const evens = values.filter( val => val % 2 === 0 );
const odds = values.filter( val => val % 2 != 0 );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"]
const oFoods = groceries.filter( item => item.includes("o"));

const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

console.log(evens)
console.log(oFoods)
console.log(oddCubes)