const mongoose = require('mongoose');


const { Schema } = mongoose;


const clientschema = new Schema({
    username:{
        type:String,
        min:3,
        max:25
    },
    email:{
        type:String,
        default:null
    },
    password:{
        type:String,
        min:5,
        max:15
    },
})



module.exports = mongoose.model("Client", clientschema)