require('dotenv').config()

const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const cors = require('cors')
// const myjson = require('./myjson.json')
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use(cors())

const appendJson = require('./utils/appendJson')

app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false

}))

app.get('/getitems',(req,res)=>{
    console.log('test fired!')
    res.json(require('./myjson.json'))
})


app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname, "public/admin.html"))
})


app.post('/additem',(req,res)=>{
    console.log(req.body);
    if(req.body.image.length > 185){
        console.log("invalid image length")
        return;
    }
    
    appendJson(req.body)
    res.json({msg:'items been added',item:req.body})
})


app.listen(PORT,console.log(`Logged onto port ${PORT}`))