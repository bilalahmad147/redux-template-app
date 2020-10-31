import { BUY_CAKE, BUY_ICECREAM } from "./action";


const initial_state = {
    numOfCakes: 10,
    numOfIceCream: 10,
}



const cakeReducer = (state = initial_state, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + 1
            }
        default:
            return state;

    }
}

export default cakeReducer;