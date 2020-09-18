import React from 'react'
import shoppingCart from "../../../assets/shoppingcart.webp"

const CanvasSwag = () => {
    return (
        <div className="canvasDiv">
            <img className='canvasimg' src={shoppingCart} alt="img"/>
          <h1 className='canvasTextOne'>Grocery</h1>
          <h2 className="canvasTextTwo">Self Checkout</h2>
            
        </div>
    )
}



export default CanvasSwag



