import React from 'react';
import { connect } from 'react-redux';

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