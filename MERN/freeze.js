const arr = Object.freeze([1,2,3,4]);
// This makes this variable unable to changed. 

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
// [Done] exited with code=0 in 0.234 seconds
// Uses spread to make a copy of the frozen object and add this stuff to it. Making a variable needThyme as an array containing
// all of the object groceryList as well as the things you wanted to add without having GL changed.

const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
// [Done] exited with code=0 in 0.197 seconds
// Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.

console.log(needThyme)