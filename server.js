require('dotenv').config()

const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const cors = require('cors')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes')
const schema = require("./graphql/schema")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(rehydrateData)


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
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false

}))

app.use("/graphql",graphqlHTTP({
        graphiql:true,
        schema:schema
}))


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




