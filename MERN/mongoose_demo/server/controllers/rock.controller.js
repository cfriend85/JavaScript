const Rock = require('../models/rock.model');

module.exports.findAllRocks = (req, res) => {
    Rock.find()
        .then(allRocks => res.json({rocks: allRocks}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.createRock = (req, res) => {
    Rock.create(req.body)
        .then(newRock => res.json({rock: newRock}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}