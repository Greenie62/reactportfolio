import React from 'react'

const CheckoutItem = ({item,removeItem}) => {
    return (
        <div className="itemDiv">
            <h5>{item.name}</h5>
            <h5>${item.price}</h5>
            <h5>Q{item.quantity}</h5>
            <span onClick={()=>removeItem(item)} className='removeItemSpan'>&times;</span>
        </div>
    )
}

export default CheckoutItem
