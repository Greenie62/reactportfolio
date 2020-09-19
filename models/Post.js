const mongoose = require('mongoose');


const {Schema} = mongoose;

const postschema = new Schema({
    title:{
        type:String,
        required:true,
        min:2
    },
    author:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
 
},
{
timestamps:true
}
)


module.exports = mongoose.model("Post",postschema)


