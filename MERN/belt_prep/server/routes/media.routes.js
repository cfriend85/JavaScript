const MediaController = require('../controllers/media.controller');

module.exports = app => {
    app.get('/api/media', MediaController.findAllMedia);
    app.post('/api/media/create', MediaController.createMedia);
    app.get('/api/media/:id', MediaController.findOneMedia);
    app.put('/api/media/update/:id', MediaController.updateMedia);
    app.delete('/api/media/delete/:id', MediaController.deleteMedia);
}
