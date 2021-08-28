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

module.exports.updateExistingRock = (req, res) => {
    Rock.findOne({_id: req.params.id})
    .then(rock => {
        rock.name = req.body.name,
        rock.color = req.body.color,
        rock.weight = req.body.weight,
        rock.foundDate = req.body.foundDate
        return rock.save();
    })
    .then(updatedRock => res.json(updatedRock))
    .catch(err => res.json({message: "Not quite right!", error: err}));
}