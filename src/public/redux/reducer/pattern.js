const initialState = {
    patternList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const pattern = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            }
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                patternList: action.payload.data.result,
            }
        default:
            return state
    }
}

export default pattern