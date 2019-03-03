import { entryConstants } from '../constants/entry.constants'

const initialState = {
    isLoading: false,
    entries: [],
    entry: {},
    error: false,
    errorMessage: ''
}

const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case entryConstants.FETCHING_ENTRY:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case entryConstants.FETCH_ENTRY_SUCCESS:
            return {
                ...state,
                error: false,
                errorMessage: '',
                entry: action.res.data,
                headline: action.res.data.attributes.headline,
                bodyText: action.res.data.attributes.bodyText,
                pubDate: action.res.data.attributes.pubDate,
                modDate: action.res.data.attributes.modDate,
                included: action.res.included,
                commentBody: action.res.included[2].attributes.body,
                commentAuthorID: (action.res.included[2].relationships.author.data!==null) ? (action.res.included[2].relationships.author.data.id) : 'Unknown', 
                authorName: action.res.included[0].attributes.name, 
                authorEmail: action.res.included[0].attributes.email,
                authorBioBody: action.res.included[1].attributes.body,
                isLoading: false,
            }
        case entryConstants.FETCH_ENTRY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.error.message,
            }
        case entryConstants.FETCHING_ENTRIES:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            }
        case entryConstants.FETCH_ENTRIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                entries: action.entries
            }
        case entryConstants.FETCH_ENTRIES_FAIL:
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

export default entriesReducer;