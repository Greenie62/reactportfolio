const router = require('express').Router();
const db = require('../../models')


router.post('/signin',(req,res)=>{
    //SET SESSION
   
    console.log(req.body)
    req.session.username=req.body.username
     res.json({msg:"Got it!"})
    //  req.session.destroy()
});


console.log("DB:",db)

router.post("/addtopic",(req,res)=>{
    console.log(req.body);
    let post={title:req.body.topic,author:req.session.username}
    console.log(post)
    db.Post.create(post)
    .then(dbpost=>{
        console.log("Post was created!")
    })
    res.json({msg:"new topic recieved",username:req.session.username})
})



router.get('/posts',async (req,res)=>{

    let posts = await db.Post.find();
    console.log(posts);

    res.json({posts})
})  


router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params.id);
    let post = await db.Post.find({_id:req.params.id});
    console.log(req.session)
    console.log(post)
    if(post[0].author !== req.session.username){
        res.json({error:"Unauthorized to delete post"})
    }
    else{
        // await db.Post.delete({_id:req.params.id})
        res.json({msg:"Post has been deleted!"})

    }
})






module.exports = router;