import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Blogs from '../components/Blogs'
import { fetchBlogs } from '../store/actions/blogsActions'

const initialState = {
    blogs: [],
    isLoading: false,
    error: false,
    errorMessage: '',
    pageLoading: true,
}

class BlogsList extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        this.props.dispatchFetchBlogs();
        this.setState({pageLoading : false});
    }    

    render(){
        const { blogs: {
            blogs,
            isLoading,
            errorMessage,
        } } = this.props
        return(
            <div>
                <Spin spinning={this.state.pageLoading}>
                <b style={{ color: 'orange' }}>{errorMessage}</b>
                <Blogs loading={isLoading} data={blogs} />
                </Spin>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchBlogs: () => fetchBlogs(),
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsList);