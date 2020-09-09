import React, {useReducer, createContext} from "react"
import mainReducer from "./reducer"



const initialState={
    food_items:[]
}


export const GlobalContext = createContext(initialState)



export const GlobalProvider = ({children}) =>{
    
    const [state,dispatch] = useReducer(mainReducer,initialState)



    function fetchItems(){
        console.log('fetchItems fired!')
        fetch("http://localhost:5000/getitems")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)

            dispatch({
                type:'FOOD_ITEMS',
                payload:res.table
            })


        })
    }

    return (<GlobalContext.Provider value={{fetchItems,food_items:state.food_items}}>
        {children}
    </GlobalContext.Provider>)
}