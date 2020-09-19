const mongoose = require('mongoose');



async function connectDB(){

    let connection = await mongoose.connect("mongodb+srv://justin:meh321@cluster0.lfuba.mongodb.net/portfoliositedb?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
         )

    console.log("DB is connected", connection.connections[0]._connectionString)
}



module.exports = connectDB;