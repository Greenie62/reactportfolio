const fs = require('fs');
const path = require("path");




async function createJson(item){
    console.log("createJson", item)
    fs.exists("fooditems.json",(verdict)=>{
        if(verdict){
        console.log("json File exists")
        fs.readFile("fooditems.json","utf-8",(err,content)=>{
            if(err)throw err;
            console.log(content)
            content=JSON.parse(content)
            content.push(item)
            content=JSON.stringify(content)
            fs.writeFile("fooditems.json",content,(err)=>{
                if(err)throw err;
                console.log("File was appended")
            })
        })
    }
    else{
        console.log("no json file")
        let arr=[item]
        arr=JSON.stringify(arr)
        fs.writeFile('fooditems.json',arr,(err)=>{
            if(err)throw err;
            console.log("File was written")
        })
    }
})
}


module.exports = createJson