var flavors = ["Mint chocolate", "Vanilla", "Sherbert", "Pistachio"];
if(flavors.length > 3){
    var toppings = ["Hot Fudge", "Jelly Beans", "Cinammon sugar", "Rainbow sprinkles"];
}


// const faveToppings = ["pecans", ...toppings];
// !!!!!!!!!!!!!!!!!!!! OR !!!!!!!!!!!!!!!!!!!!!!!!!!
const faveToppings = ["banana slice", ...toppings, "pecans"];
const sundae = {
    "iceCream": "vanilla",
    "toppings": toppings,
    "cherry": true
}

const deluxeSundae = {
    ...sundae,
    "extraScoop": "butter pecan",
    "whippedCream": true
}

console.log(faveToppings)
console.log(deluxeSundae)
const [first,...others] = toppings;

console.log(first);
console.log(others)