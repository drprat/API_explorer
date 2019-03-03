import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import { fetchBlog } from '../store/actions/blogsActions';

const initialState = {
    blog: {},
    blogText: '',
    isLoading: false,
    error: false,
    errorMessage: '',
    loader: true,
}

class BlogDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    async componentDidMount() {
        const blogID = this.props.match.params.blogID;
        this.props.dispatchFetchBlog(blogID);
        this.setState({loader: false})
    }

    render() {
        const { blogs: {
            blog,
            blogText,
            isLoading,
            errorMessage,
        } } = this.props

        return (
            
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                 
                 <Card size="default" title="Blog detail" loading={isLoading} >

                    <p><Link to="/blogs">Blogs </Link>/ Details</p>

                    <p>Blog <b>#{blog.id}</b> <br />
                        Type: <b>{blog.type}</b><br />
                        Attribute: <b>{blogText}</b></p>
                </Card>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchBlog: (blogID) => fetchBlog(blogID),
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);