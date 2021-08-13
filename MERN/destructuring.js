var flavors = ["Mint chocolate", "Vanilla", "Sherbert", "Pistachio"];
if(flavors.length > 3){
    var toppings = ["Hot Fudge", "Jelly Beans", "Cinammon sugar", "Rainbow sprinkles"];
}
toppings.push("chocolate shavings");

const sundae = {
    "iceCream": "vanilla",
    "toppings": toppings,
    "cherry": true
}
sundae['bowl'] = ("one of those whacky wavy sundae shop bowls")

const {iceCream, cherry} = sundae;


const [oneTopping, second, another, last] = toppings
// this could be like [first,......others] and it will give you the first one and then an array with all the others.



console.log(iceCream);
console.log(cherry);
console.log(sundae['toppings'])
console.log(oneTopping)
console.log(second)
console.log(another)
console.log(last)
