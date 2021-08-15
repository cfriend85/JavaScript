const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
// Slice starts at first index given inclusively and stops at the second index given non-inclusively.

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
// Exclude item celery at index 2 and use spread to populate array with two object splices, second splice is from index given (3) in this case to the end
console.log(notNeceCelery)
