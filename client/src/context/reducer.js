export default function(state,action){


    switch(action.type){

        case "SET_LOADING":
            return{
                ...state,
                loading:true
            }

        case "FOOD_ITEMS":
            return{
                ...state,
                food_items:action.payload
            }

        default:
            return state;
    }
}