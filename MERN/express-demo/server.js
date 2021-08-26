const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.json({message: "Home!", anotherkey: [1,2,3,4,5], yetanotherkey: 9})
});

app.get("/api", (req, res) => {
    res.json({message: "API route!"})
});

app.get("/api/:word", (req, res) => {
    res.json({message: `your word is ${req.params.word}`})
})

app.get("/api/users/:id", (req, res) => {
    res.json({id: req.params.id, user_name: "person1"})
})




app.listen(port, () => console.log(`Listening on port ${port}!!!`));