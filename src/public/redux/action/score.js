import axios from 'axios'
import api from '../../../config/api'

export const getScore = () => {
    return {
        type: 'GET_SCORE',
        payload: axios.get(`${api}score`)
    }
}

export const getScoreById = (userid) => {
    return {
        type: 'GET_SCORE_BY_ID',
        payload: axios.get(`${api}score/${userid}`)
    }
}

export const postScore = (data) => {
    return {
        type: 'POST_SCORE',
        payload: axios.post(`${api}score`, data)
    }
}

// export const postLogout = (userid) => {
//     return {
//         type: 'POST_LOGOUT',
//         payload: axios.post(`${api}logout/${userid}`)
//     }
// }