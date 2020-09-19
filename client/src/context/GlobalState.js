import React, {useReducer, createContext} from "react"
import mainReducer from "./reducer"



const initialState={
    food_items:[],
    checkout_items:[],
    preserved_checkout:[],
    test:"hard_coded_value",
    discountId:false,
    posts:[],
    errors:[],
    alert_msg:{},
}


export const GlobalContext = createContext(initialState)



export const GlobalProvider = ({children}) =>{
    
    const [state,dispatch] = useReducer(mainReducer,initialState)


    function fetchItems(){

        fetch('http://localhost:5000/grocery/fetchitems')
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



    function fetchPosts(){

        fetch('/forum/posts')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)

            dispatch({
                type:"FETCH_POSTS",
                payload:res.posts
            })
        })
    }


    function destroyPost(id){
        console.log("destroyPost() fired", id)


        fetch(`/forum/delete/${id}`,{
            method:"DELETE",
         
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            // if(res.error){
            //     dispatch({
            //         type:"SET_ERROR",
            //         payoad:res.error
            //     })
            // }
            // else{
            //     dispatch({
            //         type:"SUCCESS",
            //         payload:res.msg
            //     })
            // }

            dispatch({
                type:"SET_ALERT",
                payload:res
            })

            setTimeout(()=>{
                dispatch({
                type:"SET_ALERT",
                payload:{},
                })
            },1750)
        })
    }



    return (<GlobalContext.Provider value={{toggleClientDiscount,destroyPost, fetchPosts, addItemToBasket,remove_item,fetchItems,discountId:state.discountId,errors:state.errors,checkout_items:state.checkout_items,food_items:state.food_items,test:state.test, posts:state.posts,alert_msg:state.alert_msg}}>
        {children}
    </GlobalContext.Provider>)
}