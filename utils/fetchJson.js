const fs = require('fs');
const path = require('path')



async function fetchJson(){
    return new Promise(resolve=>{
    fs.readFile(path.join(__dirname, "../fooditems.json"),(err,content)=>{
        if(err)throw err;
        content=JSON.parse(content)
        // console.log(content);

        resolve(content)
    })
})
}


module.exports = fetchJson