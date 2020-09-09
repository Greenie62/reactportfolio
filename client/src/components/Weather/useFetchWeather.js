import React, {useReducer, useEffect} from "react"
import axios from "axios"


const initialState={
    loading:false,
    weather:{},
    error:false
}


const ACTIONS={
    LOADING_DATA:"LOADING_DATA",
    WEATHER:"WEATHER",
    ERROR:"ERROR"
}


function reducer(state,action){
    const {LOADING_DATA, WEATHER, ERROR} = ACTIONS
    console.log(state)
    switch(action.type){

        case LOADING_DATA:
            console.log("loadingData dispatch fired!")
            return {loading:true,weather:[]}

        case WEATHER:
            console.log(action.payload)
            return {
                ...state,
                weather:action.payload
            }
        case ERROR:
            return{
                ...state,
                error:true
            }

        default:
            return state
    }
}


export const useFetchWeather=async()=>{
    const {LOADING_DATA, WEATHER, ERROR} = ACTIONS
    const [state,dispatch] = useReducer(reducer,initialState)


    const PROXY='https://cors-anywhere.herokuapp.com/'
    useEffect(()=>{
            //  dispatch({type:LOADING_DATA})

    axios.get(`${PROXY}https://api.darksky.net/forecast/a286649fc7482f9765e634465d6fbe46/37.8267,-122.4233`)
    .then(res=>{
        console.log(res)
        dispatch({
            type:WEATHER,
            payload:res
        })


    })
     



    },[])

    return state


}