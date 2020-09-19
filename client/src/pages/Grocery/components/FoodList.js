import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../../../context/GlobalState"
// import {Query} from "react-apollo"
// import gql from "graphql-tag"
import FoodItem from "./FoodItem"


// let query = gql`
// query FoodsQuery{
//     foods{
//     name,
//     price,
//     quantity,
//     image
// }
// }`

const FoodList = () => {
        const {addItemToBasket,setCheckoutItems,fetchItems,food_items} = useContext(GlobalContext)


        useEffect(()=>{
            fetchItems()
        },[])

    const addItem=item=>{
      
        addItemToBasket(item)

        // fetch("http://localhost:5000/adjustitem",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type':"application/json"
        //     },
        //     body:JSON.stringify(item)
        // })
    }

    const selectItem=(e,idx)=>{
        if(e.target.classList.contains('buyBtn'))return;


        console.log("item selected")
        var gridChildren = document.querySelector(".foodGrid").children;
        var buyBtns= document.querySelectorAll(".buyBtn")
        // console.log(gridChildren)
        for(let i=0;i<gridChildren.length;i++){
            Array.from(gridChildren)[i].style.backgroundColor='white'
            Array.from(buyBtns)[i].style.display='none'

        }

        Array.from(buyBtns)[idx].style.display='block'
        e.target.style.backgroundColor='blue'


    }



    return (
        <div className="foodItemContainer">
            <h4 className='foodListHeaderh4'>Food List</h4>
            {/* <Query query={query}>
                {({loading,error,data})=>{
                    if(loading)return <h3>Loading...</h3>
                    if(error) return <>
                    <h3>Error: Check your network activity</h3>
                    <a href="http://localhost:3000/grocery">Reload</a>
                                     </>
                    if(data){
                        console.log(data.foods)
                        // setCheckoutItems(data.foods)
                        return(
                       <div className='foodGrid'>
                       {data.foods.map((food,idx)=>(
                            <FoodItem key={idx}
                                      selectItem={selectItem}
                                      addItem={addItem}
                                      idx={idx}
                                      food={food}/>
                        ))}
                        </div>
                        )
                    }
                }}
            </Query> */}





                       <div className='foodGrid'>
                       {food_items.length ? food_items.map((food,idx)=>(
                            <FoodItem key={idx}
                                      selectItem={selectItem}
                                      addItem={addItem}
                                      idx={idx}
                                      food={food}/>
                        )) : <div>
                            Loading...
                            <a href="/grocery">Refresh</a>
                            </div>
                            
                        }
                        </div>
                        
            
        </div>
    )
}

export default FoodList
