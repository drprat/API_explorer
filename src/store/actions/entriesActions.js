import axios from 'axios';

import { entryConstants } from '../constants/entry.constants'
import { fetchBlog } from './blogsActions'

export function fetchEntry(entryID) {
  return async (dispatch) => {
    try{
      dispatch(fetchingEntry());
      const res = await axios.get(`http://127.0.0.1:8000/entries/${entryID}?include=authors,authors.bio,comments`)
      dispatch(fetchEntrySuccess(res.data));
    } catch (err){
      console.log('error from fetchEntry: ', err)
      dispatch(fetchEntryFail(err))
    }
  }
}

export function fetchEntryWithBlog(entryID) {
  return async (dispatch) => {
    try{
      dispatch(fetchingEntry());
      const res = await axios.get(`http://127.0.0.1:8000/entries/${entryID}?include=authors,authors.bio,comments`)
      dispatch(fetchBlog(res.data.data.relationships.blog.data.id));//Fetch Blog from the blogID obtained from res
      dispatch(fetchEntrySuccess(res.data));
    } catch (err){
      console.log('error from fetchEntryWithBlog: ', err)
        dispatch(fetchEntryFail(err))
    }
  }
}

export function fetchingEntry() {
  return {
    type: entryConstants.FETCHING_ENTRY
  }
}

export function fetchEntrySuccess(resData) {
  return {
    type: entryConstants.FETCH_ENTRY_SUCCESS,
    res: resData
  }
}

export function fetchEntryFail(err) {
  return {
    type: entryConstants.FETCH_ENTRY_FAIL,
    error: err
  }
}

export function fetchEntries() {
  return async (dispatch) => {
    try {
        dispatch(fetchingEntries());
        const res= await axios.get(`http://127.0.0.1:8000/entries`);     
        dispatch(fetchEntriesSuccess(res.data.data));
      } catch (err){      
        console.log('error from fetchEntries: ', err)
        dispatch(fetchEntriesFail(err)) 
      }     
  }
}

export function fetchingEntries() {
  return {
    type: entryConstants.FETCHING_ENTRIES
  }
}

export function fetchEntriesSuccess(entries) {
  return {
    type: entryConstants.FETCH_ENTRIES_SUCCESS,
    entries: entries
  }
}

export function fetchEntriesFail(err) {
  return {
    type: entryConstants.FETCH_ENTRIES_FAIL,
    error: err
  }
}
