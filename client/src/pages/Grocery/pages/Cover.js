import React from 'react'
import grocery from "../../../assets/grocery.jpg"

const Cover = ({setPage,page}) => {
    // console.log(grocery)
    return (
        <div className='coverContainer'>
            <img src={grocery} alt="grocery" className="groceryWallPaper"/>
            <div onClick={()=>setPage(page+1)} className='coverheadertext'>
                <h1 style={{textDecoration:"underline"}}>Grocery Store</h1>
                <h2 style={{textDecoration:"underline"}}>Self Check-Out</h2>
                <p>Click to Start</p>
            </div>
        </div>
    )
}

export default Cover
