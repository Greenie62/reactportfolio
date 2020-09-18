import React from 'react'

const FoodItem = ({food,idx,selectItem,addItem}) => {


    const addToBasket = (e,food,idx) =>{
        food.quantity --
        addItem(food)
        console.log(e.target.parentElement.parentElement)
      
        var foodItems = document.querySelectorAll(".foodItem")

        foodItems[idx].style.backgroundColor='blue'
    }


    return (
        <div onClick={(e)=>selectItem(e,idx)} className="foodItem">
            <img className="noPointerEvent" src={food.image} style={{height:50}}></img>
            <p className="noPointerEvent" >{food.name}</p>
            <div className='priceQuantityFlex noPointerEvent'>
            <p className="noPointerEvent" >P: ${food.price} Q: {food.quantity}</p>
            </div>
            <div className='buyBtnDiv'><button onClick={(e)=>addToBasket(e,food,idx)} style={{display:"none"}} className='buyBtn buy'>Buy</button></div>
        </div>
    )
}

export default FoodItem
