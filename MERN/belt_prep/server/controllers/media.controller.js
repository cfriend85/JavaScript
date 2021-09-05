const Media = require('../models/media.model');

module.exports.findAllMedia = (req, res) => {
    Media.find()
        .then(allMedias => res.json({medias: allMedias}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.createMedia = (req, res) => {
    Media.create(req.body)
        .then(newMedia => res.json({media: newMedia}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.findOneMedia = (req, res) => {
    Media.findOne({_id: req.params.id})
        .then(media => res.json({media: media}))
        .catch(err => res.json({message: "Not quite right!", error: err}))
}

module.exports.updateMedia = (req, res) => {
        Media.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedMedia => res.json({ media: updatedMedia }))
            .catch(err => res.json({ message: 'Not quite right!', error: err }));
    }

module.exports.deleteMedia = (req, res) => {
    Media.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "Media deleted", result: result }))
        .catch(err => res.json({ message: 'Not quite right!', error: err }));
}