// !!!!!!!!!!!!!!!!     UN SHIFT     !!!!!!!!!!!!!!!!!!!!!!!!


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)

console.log(groceryList.slice(1,4))

// pull just the data you want out of an array. The 1 is the index you start at it pulls 'bananas' and the 4 is where you stop at 'pasta' not including it

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
// This can return a value of a specific index



const concept = ['arrays', 'can', 'be', 'mutated'];

const changeArr = (arr) => {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

const removeElement = (newArr) => {
    newArr.pop()
}

removeElement(concept)
console.log(concept)


//     NESTED

let numberClusters = [[1,2], [3,4], [5,6]]
const target = numberClusters[2][1]

const bobsFollowers = ['Cory', 'David', 'Charles', 'Anne']
const tinasFollowers = ['Cory', 'David', 'Charles']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < tinasFollowers.length; j++){
        if (bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i])
        }
    }
}


//  !!!!!!!!!!!!!!!   ITERATING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
    console.log(`I would love to visit ${vacationSpots[i]}`)
}

// WHILE LOOP
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = ''

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}

// DO, WHILE

let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
    cupsAdded++
    console.log(cupsAdded)
}
while (cupsAdded < cupsOfSugarNeeded);


// BREAK
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
    if (rapperArray[i] === "Notorious B.I.G."){
        console.log(rapperArray[i])
        break;
    }
    else{
    console.log(rapperArray[i])
    }
}
console.log(`And if you don't know, now you know.`)