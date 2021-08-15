function doAThing(){
    let flavors = ["Mint chocolate", "Vanilla", "Sherbert", "Pistachio"];
    let toppings = ["Hot Fudge", "Jelly Beans", ":Cinammon sugar", "Rainbow sprinkles"];
    
    const times = 20;
    for(let i = 0; i < times; i++){
        for(let j = 0; j < times; j++){
            console.log(i * j)
        }
    }
    // Var scopes go inwards not outwards. J only accessable in the J loop but I is accessable as well bc it's from the outer loop.
    // CANNOT change this type of Const. 
            
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
doAThing()


let pete = 10
const bob = (num) => {
    if(num < 10){
        num = 0
    }
    else if(num > 10){
        num += 100
    }
    else{
        num += 2
    }
    return num
}

console.log(bob(pete))







