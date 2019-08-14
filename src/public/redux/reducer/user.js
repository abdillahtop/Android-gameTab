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
            AsyncStorage.setItem('Token', action.payload.data.result.token)
            AsyncStorage.setItem('Name', action.payload.data.result.name)
            AsyncStorage.setItem('Role', action.payload.data.result.role_name)
            AsyncStorage.setItem('Userid', action.payload.data.result.id_user.toString())
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
        case 'POST_DATA_BY_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'POST_DATA_BY_TOKEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_DATA_BY_TOKEN_FULFILLED':
            AsyncStorage.clear()
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                isFulfilled: true,
                userList: action.payload.data.result,
            }
        default:
            return state
    }
}


export default user