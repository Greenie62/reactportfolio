import React from 'react'
import {Inforow,PayPanel,FoodList,ShoppingCart,CanvasSwag} from "../components"

const CheckOut = ({food_items}) => {
    return (
        <div className='checkOutParent'>
            <Inforow/>
             {/* <div className='groceryContainer'> */}
                 <FoodList/>
                 <CanvasSwag/>
                 <ShoppingCart/>
                 <PayPanel/>
            {/* </div> */}
        </div>
    )
}

export default CheckOut
