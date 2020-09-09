import React, {useState,useEffect,useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"

import {Cover, CheckOut} from "./pages"

import "./Grocery.css"

const Grocery = () => {
    const [page,setPage] = useState(2)
    const {fetchItems,food_items} = useContext(GlobalContext)


    useEffect(()=>{

        fetchItems()
    },[])


        switch(page){

            case 1:
                return(
                    <Cover page={page} setPage={setPage}/>
                ) 
            
            case 2:
                return(
                    <CheckOut food_items={food_items}/>
                )
        }
    
}

export default Grocery
