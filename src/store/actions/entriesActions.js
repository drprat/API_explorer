import axios from 'axios';
import { entryConstants } from '../constants/entry.constants'

export function fetchEntry(entryID) {
  return (dispatch) => {
    dispatch(fetchingEntry())
    console.log('entryID: ', entryID)
    axios.get(`http://127.0.0.1:8000/entries/${entryID}?include=authors,authors.bio,comments`)
      .then(res => {
        console.log('res:', res.data)
        dispatch(fetchEntrySuccess(res.data));
      })
      .catch(err => {
        console.log('error from fetchEntry: ', err)
        dispatch(fetchEntryFail(err))
      });
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
  return (dispatch) => {
    dispatch(fetchingEntries())
    axios.get(`http://127.0.0.1:8000/entries`)
      .then(res => {
        dispatch(fetchEntriesSuccess(res.data.data));
      })
      .catch(err => {
        console.log('error from fetchEntries: ', err)
        dispatch(fetchEntriesFail(err))
      });
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
