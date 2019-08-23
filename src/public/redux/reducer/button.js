const initialState = {
    buttonList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const button = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BUTTON_MUSIC_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'GET_BUTTON_MUSIC_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_BUTTON_MUSIC_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                buttonList: action.payload.data.result,
            }
        default:
            return state
    }
}

export default button