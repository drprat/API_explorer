import React from 'react';
import { connect } from 'react-redux';

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

    async componentDidMount(){
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
                <b style={{ color: 'orange' }}>{errorMessage}</b>
                <Blogs loading={isLoading} data={blogs} />               
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