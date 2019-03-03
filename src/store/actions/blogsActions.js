import axios from 'axios';
import { blogConstants } from '../constants/blog.constants'

export function fetchBlog(blogID) {
  return async (dispatch) => {
    try{
      dispatch(fetchingBlog());
      const res = await axios.get(`http://127.0.0.1:8000/blogs/${blogID}`);
      dispatch(fetchBlogSuccess(res.data));
    } catch (err){
      console.log('error from fetchBlog: ', err)
      dispatch(fetchBlogFail(err))
    }
  }
}

export function fetchingBlog() {
  return {
    type: blogConstants.FETCHING_BLOG
  }
}

export function fetchBlogSuccess(resData) {
  return {
    type: blogConstants.FETCH_BLOG_SUCCESS,
    res: resData
  }
}

export function fetchBlogFail(err) {
  return {
    type: blogConstants.FETCH_BLOG_FAIL,
    error: err
  }
}

export function fetchBlogs() {
  return async (dispatch) => {
    try {
      dispatch(fetchingBlogs());
      const res = await axios.get(`http://127.0.0.1:8000/blogs`);
      dispatch(fetchBlogsSuccess(res.data.data));
    } catch (err){
      console.log('error from fetchBlogs: ', err);
        dispatch(fetchBlogsFail(err));
    }    
  }
}

export function fetchingBlogs() {
  return {
    type: blogConstants.FETCHING_BLOGS
  }
}

export function fetchBlogsSuccess(blogs) {
  return {
    type: blogConstants.FETCH_BLOGS_SUCCESS,
    blogs: blogs
  }
}

export function fetchBlogsFail(err) {
  return {
    type: blogConstants.FETCH_BLOGS_FAIL,
    error: err
  }
}
