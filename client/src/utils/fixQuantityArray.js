

let dummyData =[{id:1,name:'pizza'},{id:2,name:'fries'},{id:3,name:'cheese'},{id:4,name:'pizza'},{id:5,name:'pizza'}]

function filterArray(array,payloadObj){
        let newArr=[];
    // console.log("filterArray() fired")
    
    array.forEach((i)=>{
        
        let idx = newArr.findIndex(item=>item.name === i.name);

        if(idx == -1){
            // console.log("new Item")
            // console.log(i)
             let ref = new Object({
                 name:i.name,
                 quantity:1,
                 price:i.price,
             })
           
            //  console.log(i)

             newArr.push(ref)
        }
        else{
            // console.log("add quantity")
            newArr[idx].quantity++
        }
    })
    // console.log(newArr)

    console.log(payloadObj)
    console.log(newArr)
    let payloadIdx = newArr.findIndex(item=>item.name === payloadObj.name)
    console.log("payloadIdx: " + payloadIdx)
    if(payloadIdx === -1){
        newArr.push({name:payloadObj.name,price:payloadObj.price,quantity:1})
    }
    else{
        newArr[payloadIdx].quantity++
    }

    return newArr;
}




module.exports = filterArray