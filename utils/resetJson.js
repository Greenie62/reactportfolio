const fs = require("fs");
const path = require('path');


let cleanRef=JSON.stringify([{"name":"cheerios","price":"2","quantity":"30","image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBZcSj9wFfAEHX_RzKSwA02Jr-LZXyJKKCJyFOijzTfliCORG4KpzIWwV2H6EOFFxVdXZKZUSXHg&usqp=CAc"},{"name":"peas","price":"2","quantity":"25","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFrGw-eDboAJ_-zl9QbCdoFVgFIvIiR0Q2z10O2uAoxN5oFOd66DzVQRyZ5fsIDD4y0IvAddBY&usqp=CAc"},{"name":"coke","price":"6","quantity":"15","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9nFAQDCwLHez6mi55pR7b3ObejqS44qKCWq6uX7hY5TNa_xYUy2VskctYg&usqp=CAc"},{"name":"pizza","price":"5","quantity":"15","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2ebr3vVgRCZsNPJ9uu6AreaO815aCfZxoq3zAFRFPt_JxvECdrWcoWLJ7Hmk&usqp=CAc"},{"name":"mozzerella sticks","price":"7","quantity":"25","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDTObZfaZED1_waJPVmnzSfPsqI_iaKwP6je_p1CsMPL2J1sNCq8sEn5Pzak5g4PyAmkNCw2ue&usqp=CAc"},{"name":"couscous","price":"3","quantity":25,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxTorkjO2-gZwasDrVE9mnDZFbTnEA3onoT0yB9TmhSyKbMD0AIbo9lF8F3w&usqp=CAc"}])

module.exports = function resetJson(){
    console.log('resetJson called')
    fs.writeFile("fooditems.json",cleanRef, (err,content)=>{
        if(err)throw err;
        console.log("Data was restored/rehydrated.")
    })
    
}