


module.exports = function (req,res,next){
    if(req.session.username){
        res.json({auth:true,user:req.session.username})
        }
        else{
            res.json({auth:false})
        }
        next()
}