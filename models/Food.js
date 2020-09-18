const mongoose = require('mongoose')


const { Schema } = mongoose;


const foodschema = new Schema({
    name:String,
    price:Number,
    quantity:Number,
    image:String
})


module.exports = mongoose.model("Food",foodschema)