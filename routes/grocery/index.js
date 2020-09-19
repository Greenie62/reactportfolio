const router = require('express').Router();
const appendJson = require('../../utils/appendJson')
const fetchJson = require('../../utils/fetchJson.js')
const decreaseQuantity = require('../../utils/decreaseQuantity')
const path = require('path')
const resetJson = require('../../utils/resetJson.js')



// resetJson()



router.get('/fetchitems',async(req,res)=>{
    console.log("/fetchItems fired!")
    // resetJson()
    let data= await fetchJson()
    // console.log(data)
    res.json({data})
})








router.post('/additem',(req,res)=>{
    console.log(req.body);
    if(req.body.image.length > 185){
        console.log("invalid image length")
        return;
    }
    
    appendJson(req.body)
    res.json({msg:'items been added',item:req.body})
})


router.post("/adjustitem",(req,res)=>{
    console.log(req.body)
    decreaseQuantity(req.body)
    res.end()
})


module.exports = router