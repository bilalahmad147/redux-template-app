export const USER_REQUEST = 'USER_REQUEST'
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS'
export const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL'

export const userRequest = () => {
    return {
        type: USER_REQUEST,
    }
}

export const userRequestSuccess = () => {
    return {
        type: USER_REQUEST_SUCCESS,
    }
}

export const userRequestFail = () => {
    return {
        type: USER_REQUEST_FAIL,
    }
}