import { commentConstants } from '../constants/comment.constants'

const initialState = {
    isLoading: false,
    comments: [],
    comment: {},
    error: false,
    errorMessage: ''
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentConstants.FETCHING_COMMENT:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case commentConstants.FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: '',
                comment: action.res.data,   
                commentText: action.res.data.attributes.body,     
                commentAuthId: (action.res.data.relationships.author.data!==null)?action.res.data.relationships.author.data.id : 'unknown',
                isLoading: false,
            }
        case commentConstants.FETCH_COMMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.error.message,
            }
        case commentConstants.FETCHING_COMMENTS:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case commentConstants.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: action.comments
            }
        case commentConstants.FETCH_COMMENTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.error.message,
            }

        default:
            return state
    }
}

export default commentsReducer;