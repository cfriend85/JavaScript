var flavors = ["Mint chocolate", "Vanilla", "Sherbert", "Pistachio"];
function doAThing(){
    if(flavors.length > 3){
        var toppings = ["Hot Fudge", "Jelly Beans", "Cinammon sugar", "Rainbow sprinkles"];
}
    toppings.push("chocolate shavings")      
    const sundae = {
        "ice cream": "vanilla",
        "toppings": toppings,
        "cherry": true
    }

    sundae['ice cream'] = 'chocolate'
    sundae['bowl'] = ("one of those whacky wavy sundae shop bowls")
    console.log(sundae);
}
// Can change this kind of const like so.....
// BC you're changing a thing about the sundae but not changing it from a sundae to a toilet.
console.log(flavors)
doAThing()