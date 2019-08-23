import axios from 'axios'
import api from '../../../config/api'

export const getPattern = () => {
    return {
        type: 'GET_PATTERN',
        payload: axios.get(`${api}pattern`)
    }
}

// export const postLogout = (userid) => {
//     return {
//         type: 'POST_LOGOUT',
//         payload: axios.post(`${api}logout/${userid}`)
//     }
// }