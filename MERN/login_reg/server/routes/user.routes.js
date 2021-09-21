const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/user/loggedin', authenticate, UserController.findUser);
    app.get('/api/user/logout', UserController.logout)
}