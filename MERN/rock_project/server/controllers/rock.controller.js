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

module.exports.findOneRock = (req, res) => {
    Rock.findOne({_id: req.params.id})
        .then(rock => res.json({rock: rock}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.updateRock = (req, res) => {
        Rock.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedRock => res.json({ rock: updatedRock }))
            .catch(err => res.json({ message: 'Not quite right!', error: err }));
    }

module.exports.deleteRock = (req, res) => {
    Rock.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "Rock deleted", result: result }))
        .catch(err => res.json({ message: 'Not quite right!', error: err }));
}