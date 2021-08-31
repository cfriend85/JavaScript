const mongoose = require('mongoose');

const SundaeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Sundae name must be three characters long"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not enough characters, need at least 3.`
        }
    },
    ice_cream: {
        type: String,
        required: [true, "You can't have a Sundae without ice cream!"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not enough characters, need at least 3.`
        }
    },
    sauce: {
        type: String, 
        required: [true, "Gotta have sauce!"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not enough characters, need at least 3.`
        }
    },
    whipped: {
        type: Boolean, 
        required: [true, "Yes or No to Whipped Cream"]
    },
    cherry: {
        type: Boolean, 
        required: [true, "Do you want a cherry?"]
    },
    color: {
        type: String, 
        required: [true, "You need a color theme!"]
    },
    toppings: [String]
});

const Sundae = mongoose.model('Sundae', SundaeSchema);

module.exports = Sundae;

