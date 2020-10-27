const initialState = {
    counter: 0
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ÍNCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

export default CounterReducer;