import axios from 'axios';
import { commentConstants } from '../constants/comment.constants'

export function fetchComment(commentID) {
  return (dispatch) => {
    dispatch(fetchingComment())
    console.log('commentID: ', commentID)
    axios.get(`http://127.0.0.1:8000/comments/${commentID}`)
      .then(res => {
        console.log('res:', res.data)
        dispatch(fetchCommentSuccess(res.data));
      })
      .catch(err => {
        console.log('error from fetchComment: ', err)
        dispatch(fetchCommentFail(err))
      });
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
  return (dispatch) => {
    dispatch(fetchingComments())
    axios.get(`http://127.0.0.1:8000/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.data));
      })
      .catch(err => {
        console.log('error from fetchComments: ', err)
        dispatch(fetchCommentsFail(err))
      });
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
