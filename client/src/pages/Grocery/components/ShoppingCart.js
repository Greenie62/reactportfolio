import React, {useContext,useState} from 'react'
import {GlobalContext} from "../../../context/GlobalState"
import CheckoutItem from "./CheckoutItem"
import Total from "./Total"

const ShoppingCart = () => {
    const {checkout_items,remove_item} = useContext(GlobalContext)

    console.log(checkout_items)

    const removeItem=(item)=>{
        console.log(item)
         remove_item(item)
    }

    return (
        <div className='shoppingCartContainer'>
            <div className="shoppingCartList">

            {checkout_items.length ? checkout_items.map((item,idx)=>(
                <CheckoutItem key={idx}
                              removeItem={removeItem}
                              item={item}/>
            )) : "empty cart"}
            </div>
            <Total/>
                
        </div>
    )
}

export default ShoppingCart
