import { authorConstants } from '../constants/author.constants'

const initialState = {    
    authors: [],
    author: {},
    entry: [],    
    error: false,
    errorMessage: '',
    isLoading: false,
}

const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case authorConstants.FETCHING_AUTHOR:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case authorConstants.FETCH_AUTHOR_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: '',
                author: action.res.data,
                authorId: action.res.data.id,
                name: action.res.data.attributes.name,
                email: action.res.data.attributes.email,
                entry: action.res.data.relationships.entries.data,
                isLoading: false,
            }
        case authorConstants.FETCH_AUTHOR_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.error.message,
            }
        case authorConstants.FETCHING_AUTHORS:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case authorConstants.FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authors: action.authors
            }
        case authorConstants.FETCH_AUTHORS_FAIL:
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

export default authorsReducer;