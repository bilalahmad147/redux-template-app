export const USER_REQUEST = 'USER_REQUEST'
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS'
export const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL'

export const userRequest = () => {
    return {
        type: USER_REQUEST,
    }
}

export const userRequestSuccess = user => {
    return {
        type: USER_REQUEST_SUCCESS,
        payload: user,
    }
}

export const userRequestFail = error => {
    return {
        type: USER_REQUEST_FAIL,
        payload: error,
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(userRequest)
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        data.then(data => {
            const user = data.data
            dispatch(userRequestSuccess(user))
        })
            .catch(error => {
                const errorMsg = error.message
                dispatch(userRequestFail(errorMsg))
            })
    }
}