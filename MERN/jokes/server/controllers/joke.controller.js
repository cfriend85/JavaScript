const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(joke => res.json({joke: joke}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(joke => {
        joke.setup = req.body.setup,
        joke.punchLine = req.body.punchLine,
        { new: true, runValidators: true }
        return joke.save();
    })
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json({message: "Not quite right!", error: err}));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "Joke deleted", result: result }))
        .catch(err => res.json({ message: 'Not quite right!', error: err }));
    }


