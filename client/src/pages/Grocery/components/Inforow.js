import React, {useEffect,useState} from 'react'
import {FaReact} from "react-icons/fa"
import renderTime from "../../../utils/renderTime"

const Inforow = () => {
    const [hour, setHour] = useState(renderTime[0])
    const [minute, setMinute] = useState(renderTime[1])
    const [seconds, setSeconds] = useState(renderTime[2])


    
    return (
        <div className='infoRow'>
            <div className="dateFlex">
            <h5 className="h5One">{new Date().toLocaleDateString()} </h5>
             <h5 className="h5Two">{new Date().toLocaleTimeString()} </h5>
            
        </div>

        <div className='infoFlex'>
            <h5 className="h5Three"><FaReact/>'s Checkout</h5>
        </div>
    
        </div>
    )
}

export default Inforow
