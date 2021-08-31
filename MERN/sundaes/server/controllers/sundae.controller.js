const Sundae = require('../models/sundae.model');

module.exports.findAllSundaes = (req, res) => {
    Sundae.find()
        .then(allSundaes => res.json({sundaes: allSundaes}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.createSundae = (req, res) => {
    Sundae.create(req.body)
        .then(newSundae => res.json({sundae: newSundae}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.findOneSundae = (req, res) => {
    Sundae.findOne({_id: req.params.id})
        .then(sundae => res.json({sundae: sundae}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.updateSundae = (req, res) => {
    Sundae.findOneAndUpdate(
        { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
    .then(updatedSundae => res.json({ sundae: updatedSundae }))
    .catch(err => res.json({ message: 'Not quite right!', error: err }));
    }

module.exports.addTopping = (req, res) => {
    Sundae.findOneAndUpdate(
        { _id: req.params.id },
        {$push: {toppings: req.body.toppings}}
    )
    .then(updatedSundae => res.json({ sundae: updatedSundae }))
    .catch(err => res.json({ message: 'Not quite right!', error: err }));
}

module.exports.deleteSundae = (req, res) => {
    Sundae.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "Sundae deleted", result: result }))
        .catch(err => res.json({ message: 'Not quite right!', error: err }));
}