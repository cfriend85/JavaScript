const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {type: String, required: true, minlength: [10, "Setup must be at least 10 characters long"]},
    punchLine: {type: String, required: true, minlength: [3, "Punchline must be at least 3 characters long"]}
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;