import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Comments from '../components/Comments'
import { fetchComments } from '../store/actions/commentsActions'

const initialState = {
    comments: [],
    isLoading: false,
    error: false,
    errorMessage: '',
}

class CommentsList extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        this.props.dispatchFetchComments();

        /* axios.get('http://127.0.0.1:8000/comments')
        .then(res => {
            this.setState({
                comments: res.data.data
            });
            console.log('res.data',this.state.comments);
        })
        .catch(err => {console.log('error from CommentsList',err)}) */
    }

    render(){
        const { comments: {
            comments,
            isLoading,
            errorMessage,
        } } = this.props
        return(
            <div>
                <b style={{ color: 'orange' }}>{errorMessage}</b>
            <Comments loading={isLoading} data={comments} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchComments: () => fetchComments(),
}

const mapStateToProps = state => ({
    comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);