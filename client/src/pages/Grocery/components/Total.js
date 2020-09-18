import React, {useContext, useState, useEffect} from 'react'
import {GlobalContext} from "../../../context/GlobalState"
import calcTotal from "../../../utils/fixListQuant"

const Total = () => {
    const {checkout_items,discountId} = useContext(GlobalContext);
    const [subTotal, setSubTotal] = useState(calcTotal(checkout_items))
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)
    const [savings,setSavings] = useState(0)

        console.log(discountId)

    useEffect(()=>{

         let totalPH = calcTotal(checkout_items)


         setTax(()=>(totalPH * .05).toFixed(2))
  
         setSubTotal(calcTotal(checkout_items))

         setTotal(JSON.parse(tax) + JSON.parse(subTotal))

        // console.log(totals)

        if(discountId){
            let ref = subTotal;
            ref = ref - (ref * .15)
            let saveRef = (ref * .15).toFixed(2)
            setSavings(saveRef)
             setSubTotal(ref)
        }



    },[checkout_items,discountId])


    return (
        <div className="totalsDiv">
            <h4>Sub-total:{subTotal > 0 ? `${subTotal}` : null}</h4>
            <h4>Tax:{tax === "0.00" ? null : tax}</h4>
            <h5 style={{color:'red'}}>{discountId ? savings : null}</h5>
            <h3>Total:{subTotal === 0 ? null : `$${(JSON.parse(tax) + JSON.parse(subTotal))}` }</h3>
        </div>
    )
}

export default Total
