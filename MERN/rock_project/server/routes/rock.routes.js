const RockController = require('../controllers/rock.controller');

module.exports = app => {
    app.get('/api/rocks', RockController.findAllRocks);
    app.post('/api/rocks/create', RockController.createRock);
//     app.get('/api/rocks/:id', RockController.findOneSingleRock);
    app.put('/api/rocks/update/:id', RockController.updateExistingRock);
//     app.delete('/api/rocks/:id', RockController.deleteAnExistingRock);
}
