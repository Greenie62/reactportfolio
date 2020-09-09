import React, {useEffect, useState} from 'react'
import axios from "axios"
import "./Weather.css"
import CountUp from "react-countup"
// import {useFetchWeather} from "./useFetchWeather"

export const Weather = () => {
    const [loading,setLoading] = useState(true)
    const [weather, setWeather] = useState({})
    const [temp,setTemp] = useState("")
    const [timezone,setTimezone] = useState("")



    useEffect(()=>{
        
        const PROXY='https://cors-anywhere.herokuapp.com/'
        axios.get(`${PROXY}https://api.darksky.net/forecast/a286649fc7482f9765e634465d6fbe46/37.8267,-122.4233`)
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setTemp(res.data.currently.temperature)
            setTimezone(res.data.timezone)
            setLoading(false)
        })

    },[])
 
    return (
        <div className="weatherContainer">
            <div className="thermometer">
            <div style={{height:temp ? `${temp.toFixed(2)}%` : '0%'}} className="thermometerred"></div>
            </div>
            <div className='weatherStats'>
         {loading ? "Loading..." :  <>

                                    <CountUp start={0}
                                             end={parseInt(temp.toFixed(2))} 
                                             duration='2s'/>
                                     <span style={{left:'5px'}} className='degrees'>&#730; </span>
                                     <br/>
                                     <small>{new Date().toLocaleTimeString()}</small>
                                    </>
                                            
         }    
         </div>
        </div>
    )
}
