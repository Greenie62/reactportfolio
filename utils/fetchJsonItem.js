const fs = require('fs');
const path = require('path');



async function fetchJsonItem(name){
    return new Promise(resolve=>{
    fs.readFile(path.join(__dirname, "../fooditems.json"),"utf-8",(err,content)=>{
        if(err)throw err;
        console.log(content);
        content=JSON.parse(content);
        let foodItem = content.find(u=>u.name === name)

        console.log("FoodItem: " + foodItem)

        resolve(foodItem)
    })
})
}


module.exports = fetchJsonItem