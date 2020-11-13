const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number,
        default: Date.now
    },
    excercises:[
        {
            type: {
                type:String,
                trim:true,
                required: "Enter excerise"
            }, 
            name:
        }
    ]
})