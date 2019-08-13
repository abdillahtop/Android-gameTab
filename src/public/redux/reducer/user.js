import { AsyncStorage } from 'react-native';

const initialState = {
    userList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    isLogin: false
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_REGIST_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'POST_REGIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_REGIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: action.payload.data.result,
            }
        case 'POST_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'POST_LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_LOGIN_FULFILLED':
            console.log("reducer:", action.payload.data.result)
            AsyncStorage.setItem('Data', action.payload.data.result)
            AsyncStorage.setItem('token', action.payload.data.result.token.toString())
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isLogin: true,
                userList: action.payload.data.result,
            }

        case 'POST_LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'POST_LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_LOGOUT_FULFILLED':
            AsyncStorage.clear()
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                isFulfilled: true,
                userList: action.payload.data.result,
            }
        default:
            return state
    }
}


export default user