require('dotenv').config()

const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const cors = require('cors')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const RedisStore = require('connect-redis')
const client = require('redis');
const app = express();
const PORT = process.env.PORT || 5000;

const auth = require('./middleware/auth.js')
const routes = require('./routes')
const schema = require("./graphql/schema");
const connectDB = require("./db")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(rehydrateData)

connectDB()


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})
}
else {
    app.use(express.static("public"));
}


app.use(cors())


app.use(session({
    name:"forumuserid",
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 365 * 5,
        httpOnly:false
    },

}))

app.use("/graphql",graphqlHTTP({
        graphiql:true,
        schema:schema
}))


// CHECKS USER FOR SESSION ON FORUM COMPONENT
app.use("/auth",auth)

 app.use(routes)




app.listen(PORT,console.log(`Logged onto port ${PORT}`))





function setStaticFile() {
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));

	app.get('*', (request, response) => {
		response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}
    else {
        app.use(express.static("public"));
    }
}




