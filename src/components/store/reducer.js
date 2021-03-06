import { USER_REQUEST, USER_REQUEST_FAIL, USER_REQUEST_SUCCESS } from "./action";

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case USER_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;
