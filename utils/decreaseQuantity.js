const fs = require('fs');
const path = require('path');



function decreaseQuantity(item){

    fs.readFile(path.join(__dirname, "../fooditems.json"), "utf-8",(err,content)=>{
        if(err)throw err;
        let data = JSON.parse(content);

        let idx = data.findIndex(i=>i.name === item.name);

        data[idx].quantity--

        console.log(data)

        fs.writeFile(path.join(__dirname,"../fooditems.json"),JSON.stringify(data),(err)=>{
            if(err)throw err;
            console.log(data)
            console.log("Item quantity was adjusted")
        })
    })
}


module.exports = decreaseQuantity;




