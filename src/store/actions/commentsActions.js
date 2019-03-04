import axios from 'axios';
import { commentConstants } from '../constants/comment.constants'
import { fetchAuthor } from './authorsActions'
import { fetchEntry } from './entriesActions'

export function fetchComment(commentID) {
  return async (dispatch) => {
    try{
      dispatch(fetchingComment());
      const res = await axios.get(`http://127.0.0.1:8000/comments/${commentID}`)
      dispatch(fetchAuthor(res.data.data.relationships.author.data.id));
      dispatch(fetchCommentSuccess(res.data));
    } catch(err) {
      console.log('error from fetchComment: ', err)
      dispatch(fetchCommentFail(err))
    }
  }
}

export function fetchCommentWithRelations(commentID) {
  return async (dispatch) => {
    try{
      dispatch(fetchingComment());
      const res = await axios.get(`http://127.0.0.1:8000/comments/${commentID}`);
      dispatch(fetchEntry(res.data.data.relationships.entry.data.id));
      dispatch(fetchAuthor(res.data.data.relationships.author.data.id));
      dispatch(fetchCommentSuccess(res.data));
    } catch(err) {
      console.log('error from fetchCommentWithRelations: ', err)
      dispatch(fetchCommentFail(err))
    }
  }
}

export function fetchingComment() {
  return {
    type: commentConstants.FETCHING_COMMENT
  }
}

export function fetchCommentSuccess(resData) {
  return {
    type: commentConstants.FETCH_COMMENT_SUCCESS,
    res: resData
  }
}

export function fetchCommentFail(err) {
  return {
    type: commentConstants.FETCH_COMMENT_FAIL,
    error: err
  }
}

export function fetchComments() {
  return async (dispatch) => {
    try{
      dispatch(fetchingComments());
      const res= await axios.get(`http://127.0.0.1:8000/comments`);
      dispatch(fetchCommentsSuccess(res.data.data));
    } catch(err) {
      console.log('error from fetchComments: ', err);
        dispatch(fetchCommentsFail(err));
    }
  }
}

export function fetchingComments() {
  return {
    type: commentConstants.FETCHING_COMMENTS
  }
}

export function fetchCommentsSuccess(comments) {
  return {
    type: commentConstants.FETCH_COMMENTS_SUCCESS,
    comments: comments
  }
}

export function fetchCommentsFail(err) {
  return {
    type: commentConstants.FETCH_COMMENTS_FAIL,
    error: err
  }
}
