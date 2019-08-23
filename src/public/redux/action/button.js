import axios from 'axios'
import api from '../../../config/api'

export const getButtonMusic = () => {
    return {
        type: 'GET_BUTTON_MUSIC',
        payload: axios.get(`${api}music`)
    }
}