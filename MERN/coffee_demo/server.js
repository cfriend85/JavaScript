const express = require('express');
const app = express();
const port = 8000;


var faker = require('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class Order{
    constructor(){
        const bases = ["Dark Roast", "Medium Roast", "Light Roast", "Green Tea", "Black Tea", "Espresso"]
        const additives = ["Milk", "Soy Milk", "Coconut Milk", "Almond Milk", "Oat Milk", "Goat Milk", "Water", "Cheese", "Butter", "Camel Milk", "Jameson", "Bailey's"]
        const sweeteners = ["Sugar", "Splenda", "Honey", "Pumpkin Spice Syrup", "Mint Syrup", "Chocolate Syrup", "Caramel", "Hazelnut Syrup"]
        const toppings = ["Whipped Cream", "Gold Flake", "Cinnamon", "Chocolate Shavings", "Caramel Swirl"]

        this.base = bases[Math.floor(Math.random() * bases.length)]
        this.additives =  additives[Math.floor(Math.random() * additives.length)]
        this.sweeteners =  sweeteners[Math.floor(Math.random() * sweeteners.length)]
        this.toppings =  toppings[Math.floor(Math.random() * toppings.length)]
        this.barrista = faker.name.findName()
        this.coffeeShop = `${faker.company.companyName()} Coffee Haus`
        this.catchprase = faker.company.catchPhrase()
        this.address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}  ${faker.address.zipCode()}`
        this.price = faker.commerce.price()
    }
}

app.get("/", (req, res) => {
    res.json({message: "Coffee time!"})
});

app.get("/api/order", (req, res) => {
    res.json(new Order())
})


app.listen(port, () => console.log(`Listening on port ${port}!!!`))