const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
  
    })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
  
    })

});

router.get("/api/workouts/:id", (req, res) => {
    
        const { id } = req.params;
        db.Workout.findOne({
            _id: id,
        }).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json
        })
   
});

router.put("/api/workout/:id", ({body,parms},res) =>{
    // console.log(body,parms)
    const id = params.id;
    let savedExercises = [];
    
    // saves excercise in current workout 
    db.Workout.find({_id: id})
    .then(dbWorkout => {
        // console.log(dbWorkout);
        savedExercises = dbWorkout[0].exercises;
        res.json(savedExercises);
        let allExcercises = [...savedExercises,body];
        updateWorkout(allExcercises);
        // console.log()
    })
    .catch(err => {
        res.json(err);
    });

    function updateWorkout(exercises){
        db.Workout.findByIdAndUpdate (id,{exercises: excercises},function(err,doc){
            if(err){
                console.logg(err)
            }
        })
    }
});