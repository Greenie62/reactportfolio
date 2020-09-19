import React, {useState,useEffect,useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"

import {Cover, CheckOut} from "./pages"

import "./Grocery.css"

const Grocery = () => {
    const [page,setPage] = useState(1)
 


        switch(page){

            case 1:
                return(
                    <Cover page={page} setPage={setPage}/>
                ) 
            
            case 2:
                return(
                    <CheckOut/>
                )
        }
    
}

export default Grocery
