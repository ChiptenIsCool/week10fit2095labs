//https://hub.packtpub.com/building-movie-api-express/
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actorrouter');
const movies = require('./routers/movierouter');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let path = require("path");
app.use("/", express.static(path.join(__dirname, "dist/week10labs")))


mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});



//Movie RESTFul  endpoints
app.delete('/movies/deletebetween/:year1/:year2', movies.deleteBetween)
app.get('/movies', movies.getAll);
app.put('/actors/update/:id', actors.updateOne);
app.post('/actors', actors.createOne);
app.post('/movies', movies.createOne);
app.delete('/movies/:id', movies.deleteOne);
app.delete('/movies/deletebytitle/:title', movies.deleteMovieByTitle);
app.post('/movies/:id/actors', movies.addActors);
app.get('/actors', actors.getAll);
app.delete('/actors/:id', actors.deleteOne);





app.listen(8080);