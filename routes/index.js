const router = require('express').Router();
const groceryRoutes = require("./grocery")
const forumRoutes = require('./forum')





router.use("/grocery",groceryRoutes)
router.use('/forum',forumRoutes)



router.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/admin.html"))
})


module.exports = router;