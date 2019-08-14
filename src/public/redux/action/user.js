import axios from 'axios'
import api from '../../../config/api'

export const postRegister = (data) => {
    return {
        type: 'POST_REGIST',
        payload: axios.post(`${api}register`, data)
    }
}

export const postLogin = (data) => {
    return {
        type: 'POST_LOGIN',
        payload: axios.post(`${api}login`, data)
    }
}

export const postLogout = (userid) => {
    return {
        type: 'POST_LOGOUT',
        payload: axios.post(`${api}logout/${userid}`)
    }
}