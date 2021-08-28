const mongoose = require('mongoose');

const RockSchema = new mongoose.Schema({
    name: String,
    color: String,
    feel: String,
    weight: Number,
    foundDate: Date
});

const Rock = mongoose.model('Rock', RockSchema);

module.exports = Rock;

