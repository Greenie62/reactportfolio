import fixQuantityArray from "../utils/fixQuantityArray"
import fixListQuant from "../utils/fixListQuant"

export default function(state,action){


    switch(action.type){

        case "SET_LOADING":
            return{
                ...state,
                loading:true
            }

        

        case "FOOD_ITEMS":
            console.log(action.payload)
            return{
                ...state,
                food_items:action.payload
            }

        case "CHECKOUT_ITEM":
                console.log("name: " + action.payload.name)
              let fixed = fixQuantityArray(state.preserved_checkout,action.payload)

               return{
                ...state,
                checkout_items:fixed,
                preserved_checkout:[...state.preserved_checkout,action.payload]
            }


        case "REMOVE_ITEM":
            console.log(action.payload);
            return{
                ...state,
                checkout_items:action.payload
            }
            break;

        case "TOGGLE_DISCOUNTID":
            console.log(action.payload);

            return{
                ...state,
                discountId:action.payload

            }

        case "FETCH_POSTS":
            console.log(action.payload);
            return{
                ...state,
                posts:action.payload
            }


        case "SET_ERROR":
            console.log(action.payload);
            return{
                ...state,
                errors:[...action.payload]
            }

        case "SUCCESS":
            console.log(action.payload);
            return{
                ...state,
                success:action.payload
            }

        case "SET_ALERT":
            console.log(action.payload);
            return{
                ...state,
                alert_msg:action.payload
            }
            


        default:
            return state;
    }
}

