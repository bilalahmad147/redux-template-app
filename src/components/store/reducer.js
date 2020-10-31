const initial_state = {
    numOfCakes: 10,
}



const cakeReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case 'INCREMENT':
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        default:
            return state;

    }
}

export default cakeReducer;