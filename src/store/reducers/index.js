import { combineReducers } from 'redux'
import entriesReducer from './entriesReducer'
import authorsReducer from './authorsReducer'
import commentsReducer from './commentsReducer'
import blogsReducer from './blogsReducer'

const rootReducer = combineReducers({
  entries : entriesReducer,
  authors : authorsReducer,
  comments : commentsReducer,
  blogs :blogsReducer,
});

export default rootReducer;