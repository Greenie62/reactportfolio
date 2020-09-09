let fs = require('fs')


let food=['pizza','ice cream','beer','chips','fruit','pasta','chicken','juice','crackers','rice'];
let price=[7,2,8,1,2,3,7,2,3,1]
let sale=[true,true,false,false,false,true,false,true,false,false]

let obj={
    table: []
}


fs.exists('myjson.json',function(exists){
    if(exists){
        console.log("already there")
        fs.readFile('myjson.json', (err, data) {

            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data);

                    obj.table.push({
                        id:obj.table.length ,
                        name:"stuffing",
                        price:2,
                        sale:true
                })

                let json = JSON.stringify(obj);
                fs.writeFile('myjson.json', json,(err)=>{
                    if(err)throw err;
                    console.log('file appended')
                });
            }
        });
    }
    else{
        console.log("nope!")

        for (i = 0; i < 10; i++) {
            obj.table.push({
                id: i,
                name:food[i],
                price:price[i],
                sale:sale[i]
            });
        }

        let json = JSON.stringify(obj);
        fs.writeFile('myjson.json', json,(err)=>{
            if(err)throw err;
            console.log("File was written")
        });
    }
    
})