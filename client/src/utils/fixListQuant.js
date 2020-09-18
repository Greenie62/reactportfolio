



function calcTotal(arr){
    let total=0;

    arr.forEach(i=>{
        let sum =i.price * i.quantity;
        total += sum;
    })

    return total;
}


module.exports = calcTotal;