import React, {useReducer, createContext} from "react"
import mainReducer from "./reducer"



const initialState={
    food_items:[],
    checkout_items:[],
    preserved_checkout:[],
    test:"hard_coded_value",
    discountId:false
}


export const GlobalContext = createContext(initialState)



export const GlobalProvider = ({children}) =>{
    
    const [state,dispatch] = useReducer(mainReducer,initialState)


    function fetchItems(){

        fetch('http://localhost:5000/fetchitems')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data)
            dispatch({
                type:"FOOD_ITEMS",
                payload:res.data
            })
        })
    }


    function toggleClientDiscount(verdict){
        console.log(verdict)

        dispatch({
            type:"TOGGLE_DISCOUNTID",
            payload:verdict
        })
    }


    function remove_item(payloadItem){
        console.log("Item: " + payloadItem.name)

        let idx = state.checkout_items.findIndex(item=>item.name === payloadItem.name);
        let ref= state.checkout_items;
        if(ref[idx].quantity > 1){
        ref[idx].quantity--
        }
        else{
            ref.splice(idx,1)
        }

        dispatch({
            type:"REMOVE_ITEM",
            payload:ref
        })
    }


    function addItemToBasket(item){
        console.log(item)

        dispatch({
            type:"CHECKOUT_ITEM",
            payload:item
        })
    }

    return (<GlobalContext.Provider value={{toggleClientDiscount, addItemToBasket,remove_item,fetchItems,discountId:state.discountId,checkout_items:state.checkout_items,food_items:state.food_items,test:state.test}}>
        {children}
    </GlobalContext.Provider>)
}