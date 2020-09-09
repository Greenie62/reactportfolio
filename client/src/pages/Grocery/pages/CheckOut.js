import React from 'react'
import {Inforow,PayPanel} from "../components"

const CheckOut = ({food_items}) => {
    return (
        <div className='checkOutParent'>
            <Inforow/>
             <div className='groceryContainer'>
                 <PayPanel/>
            </div>
        </div>
    )
}

export default CheckOut
