import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { fetchCommentWithRelations } from '../store/actions/commentsActions'

const initialState = {
    comment: {},
    commentText: '',
    commentAuthId: '',
    isLoading: false,
    error: false,
    errorMessage: '',
    name: '',
    entry: {},
}

class CommentDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const commentID = this.props.match.params.commentID;
        this.props.dispatchFetchCommentWithRelation(commentID);
    }

    render() {
        const { comments: {
            comment,
            commentText,
            commentAuthId,
            isLoading,
            errorMessage,
        } } = this.props

        const { entries: {
            headline,bodyText,pubDate,modDate
        } } = this.props
        
        const { authors: {
            name,email
        } } = this.props

        return (
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                <Card size="default" title="Comment detail" loading={isLoading}>
                <p><Link to="/comments">Comments </Link>/ Detail</p>
                    <p>Comment <b>#{comment.id}</b> <br/>
                    Comment type: <b>{comment.type}</b><br/>
                    Comment Text: <b>{commentText}</b></p>

                    <Card size="small" title="Commented by" loading={isLoading} style={{ marginTop: 16 }}> 
                    <p> Author: <b>{name}</b><br/>
                    Author Email: <b>{email}</b><br/>
                    Author ID:<b>{commentAuthId}</b></p>
                    </Card>

                    <Card size="small" title="Commented on Entry" loading={isLoading} style={{ marginTop: 16 }}> 
                    <p>Headline: <b>#{headline}</b> <br/>
                     Body Text: <b>{bodyText}</b><br/>
                     Pub Date: <b>{pubDate}</b><br/>
                     Mod Date: <b>{modDate}</b><br/></p>
                    </Card>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchCommentWithRelation: (commentID) => fetchCommentWithRelations(commentID),
}

const mapStateToProps = state => ({
    comments: state.comments,
    authors: state.authors,
    entries: state.entries,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetail);