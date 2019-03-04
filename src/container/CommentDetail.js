import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { fetchComment } from '../store/actions/commentsActions'

const initialState = {
    comment: {},
    commentText: '',
    commentAuthId: '',
    isLoading: false,
    error: false,
    errorMessage: '',
    name: '',
}

class CommentDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const commentID = this.props.match.params.commentID;
        this.props.dispatchFetchComment(commentID);
    }

    render() {
        const { comments: {
            comment,
            commentText,
            commentAuthId,
            isLoading,
            errorMessage,
        } } = this.props
        
        const { authors: {
            name,email
        } } = this.props

        return (
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                <Card size="default" title={("Comment detail")} loading={isLoading}>
                <p><Link to="/comments">Comments </Link>/ Detail</p>
                    <p>Comment <b>#{comment.id}</b> <br/>
                    Comment type: <b>{comment.type}</b><br/>
                    Comment Text: <b>{commentText}</b><br/>
                    Author: <b>{name}</b><br/>
                    Author Email: <b>{email}</b><br/>
                    Author ID:<b>{commentAuthId}</b></p>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchComment: (commentID) => fetchComment(commentID),
}

const mapStateToProps = state => ({
    comments: state.comments,
    authors: state.authors
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetail);