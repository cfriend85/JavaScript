const SundaeController = require('../controllers/sundae.controller');

module.exports = app => {
    app.get('/api/sundaes', SundaeController.findAllSundaes);
    app.post('/api/sundaes/create', SundaeController.createSundae);
    app.get('/api/sundaes/:id', SundaeController.findOneSundae);
    app.put('/api/sundaes/update/:id', SundaeController.updateSundae);
    app.delete('/api/delete/sundae/:id', SundaeController.deleteSundae);
    app.patch('/api/sundaes/addtopping/:id', SundaeController.addTopping);
}
