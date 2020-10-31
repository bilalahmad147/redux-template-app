import { combineReducers } from "@reduxjs/toolkit";
import { BUY_CAKE, BUY_ICECREAM } from "./action";


const initStateForCake = {
    numOfCakes: 10
}

const initStateForIceCream = {
    numOfIceCream: 20,
}



const cakeReducer = (state = initStateForCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        default:
            return state;

    }
}

const iceCreamReducer = (state = initStateForIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + 1
            }
        default:
            return state;

    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

export default rootReducer;