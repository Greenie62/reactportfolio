const fs = require("fs");
const path = require('path');




function editJson(idx=0){

    fs.readFile(path.join(__dirname, "../fooditems.json"),"utf-8",(err,content)=>{
        if(err)throw err;
        console.log(content);
        content=JSON.parse(content);
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content.pop()
        // content=JSON.stringify(content)
        
    
        console.log(content)

        // fs.writeFile(path.join(__dirname, "../fooditems.json"),content,(err)=>{
        //     if(err)throw err;
        //     console.log("file was fixed")
        // })
    })
}


editJson()