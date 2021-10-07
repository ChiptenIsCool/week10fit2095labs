var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
    getAll: function (req, res) {
        Movie.find({}).populate('actors').exec(function(err, movies){
            if (err) return res.status(400).json(err);
            res.json(movies);
        });
    },
    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    deleteOne: function (req, res) {
        Movie.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    deleteBetween: function (req, res) {
        Movie.find(function (err, movies) {
            
            if (err) return res.status(400).json(err);
            for (let i = 0; i < movies.length; i++){
                if (movies[i].year >= req.params.year1 && movies[i].year <= req.params.year2){
                    
                    Movie.findOneAndRemove({ _id: movies[i].id }, function (err) {
                        if (err) return res.status(400).json(err);
                        
                    });

                }
            }
            res.json();
        });
    },
    deleteMovieByTitle: function (req, res) {
        Movie.find(function (err, movies) {
            
            if (err) return res.status(400).json(err);
            for (let i = 0; i < movies.length; i++){
                if (movies[i].title === req.params.title){
                    
                    Movie.findOneAndRemove({ _id: movies[i].id }, function (err) {
                        if (err) return res.status(400).json(err);
                        
                    });

                }
            }
            res.json();
        });
    },
    addActors: function (req, res) {
        Movie.findOne({ _id: req.params.id }, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            Actor.findOne({ _id: req.body.id }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movie.actors.push(actor._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            })
        });
    },
    

};