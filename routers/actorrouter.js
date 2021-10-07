const mongoose = require('mongoose');
const Actor = require('../models/actor');
const Movie = require('../models/movie');
module.exports = {
    getAll: function (req, res) {
        Actor.find({}).exec(function(err, actors){
            if (err) {return res.status(404).json(err);} 
            else {
                res.json(actors);
            }
        });

    },
    createOne: function (req, res) {
        let newActorDetails = req.body;
        newActorDetails._id = new mongoose.Types.ObjectId();
        let actor = new Actor(newActorDetails);
        Actor.create(newActorDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(actor);
        });
    },
    deleteOne: function (req, res) {
        Actor.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    updateOne: function (req, res) {
        Actor.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
};