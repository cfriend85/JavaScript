const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api', JokeController.findAllJokes);
    app.get('/api/joke/:id', JokeController.findOneJoke);
    app.post('/api/joke/create', JokeController.createJoke);
    app.put('/api/update/joke/:id', JokeController.updateJoke);
    app.get('/api/delete/joke/:id', JokeController.deleteJoke);
}