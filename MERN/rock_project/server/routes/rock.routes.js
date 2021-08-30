const RockController = require('../controllers/rock.controller');

module.exports = app => {
    app.get('/api/rocks', RockController.findAllRocks);
    app.post('/api/rocks/create', RockController.createRock);
    app.get('/api/rocks/:id', RockController.findOneRock);
    app.put('/api/rocks/update/:id', RockController.updateRock);
    app.delete('/api/delete/rock/:id', RockController.deleteRock);
}
