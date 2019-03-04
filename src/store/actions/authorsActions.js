import axios from 'axios';
import { authorConstants } from '../constants/author.constants'
import { fetchEntry } from './entriesActions'

export function fetchAuthor(authorID) {
    return async (dispatch) => {
      try{
        dispatch(fetchingAuthor());
        const res = await axios.get(`http://127.0.0.1:8000/authors/${authorID}`);
        dispatch(fetchAuthorSuccess(res.data));
      } catch(err) {
        console.log('error from fetchAuthor: ', err);
        dispatch(fetchAuthorFail(err));
      }
    }
  }

  export function fetchAuthorWithEntry(authorID) {
    return async (dispatch) => {
      try{
        dispatch(fetchingAuthor());
        const res = await axios.get(`http://127.0.0.1:8000/authors/${authorID}`);
        dispatch(fetchEntry(res.data.data.relationships.entries.data[0].id));
        dispatch(fetchAuthorSuccess(res.data));
      } catch(err) {
        console.log('error from fetchAuthor: ', err);
        dispatch(fetchAuthorFail(err));
      }
    }
  }

export function fetchingAuthor(){
    return {
      type: authorConstants.FETCHING_AUTHOR
    }
  }

  export function fetchAuthorSuccess(resData){
    return {
      type: authorConstants.FETCH_AUTHOR_SUCCESS,
      res: resData
    }
  }
  
export function fetchAuthorFail(err){
    return {
      type: authorConstants.FETCH_AUTHOR_FAIL,
      error: err
    }
  }

  export function fetchAuthors() {
    return async (dispatch) => {
      try{
        dispatch(fetchingAuthors())
        const res = await axios.get(`http://127.0.0.1:8000/authors`)
        dispatch(fetchAuthorsSuccess(res.data.data));
      } catch(err) {
        console.log('error from fetchAuthors: ', err)
        dispatch(fetchAuthorsFail(err))
      }
    }
  }

export function fetchingAuthors(){
    return {
      type: authorConstants.FETCHING_AUTHORS
    }
  }

  export function fetchAuthorsSuccess(authors){
    return {
      type: authorConstants.FETCH_AUTHORS_SUCCESS,
      authors: authors
    }
  }
  
export function fetchAuthorsFail(err){
    return {
      type: authorConstants.FETCH_AUTHORS_FAIL,
      error: err
    }
  }
