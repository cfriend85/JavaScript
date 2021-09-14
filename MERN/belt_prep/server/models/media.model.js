const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Media must have a title!"],
        validate: {
            validator: (input) => {
                return input.length >= 2
            },
            message: (input) => `${input.value} is not enough characters! Must be at least 2.`
        }
    },

    image_url: {
        type: String,
        required: [true, "Media must have an image!"],
        validate: {
            validator: (input) => {
                return /.*([A-Za-z1-9]+)\.([A-Za-z1-9]+).*/.test(input)
            },
            message: (input) => `${input.value} is not a valid URL!`
        }
    },

    year: {
        type: Number,
        require: [true, "The year released is required"],
        validate: {
            validator: (input) => {
                return input >= 1902
            },
            message: (input) => `${input.value} is before media became a thing, they were reading books in ${input.value}!`
        }
    },

    actors: [String],

    director: {
        type: String,
        require: [true, "You must include the Director!"],
        validate: {
            validator: (input) => {
                return input.length >= 1
            },
            message: (input) => "You must include the Director!"
        }
    },

    isMovie: {
        type: Boolean,
        required: [true, "Is this a movie?"]
    },

    genre: {
        type: String,
        required: [true, "You must include the genre!"]
    },
});

const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;

