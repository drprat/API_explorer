import { blogConstants } from '../constants/blog.constants'

const initialState = {
    isLoading: false,
    blogs: [],
    blog: {},
    error: false,
    errorMessage: ''
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case blogConstants.FETCHING_BLOG:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case blogConstants.FETCH_BLOG_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: '',
                blog: action.res.data,
                blogText: action.res.data.attributes.name,
                isLoading: false,
            }
        case blogConstants.FETCH_BLOG_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.error.message,
            }
        case blogConstants.FETCHING_BLOGS:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case blogConstants.FETCH_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.blogs,
                isLoading: false,
            }
        case blogConstants.FETCH_BLOGS_FAIL:
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

export default blogsReducer;