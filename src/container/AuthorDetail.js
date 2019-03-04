import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { fetchAuthorWithEntry } from '../store/actions/authorsActions';

const initialState = {
    author: {},
    name: '',
    email: '',
    entry: {},
    isLoading: false,
    error: false,
    errorMessage: '',
    headline: '',
    bodyText: '',
    pubDate: '',
    modDate: ''
}

class AuthorDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const authorID = this.props.match.params.authorID;
        this.props.dispatchFetchAuthorWithEntry(authorID);
    }

    render() {
        const { authors: {
            author,
            name,
            email,
            isLoading,
            errorMessage,
        } } = this.props

        const { entries: {            
            entry,
            headline,
            bodyText,
            pubDate,
            modDate
        } } = this.props

        return (
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                <Card size="default" title="Author detail" loading={isLoading}>
                    <p><Link to="/authors">Authors </Link>/ Details</p>
                    <p>Author <b>#{author.id}</b> <br />
                        Name: <b>{name}</b><br />
                        Email: <b>{email}</b><br />
                        headline: <b>{headline}</b></p>                        

                    <Card size="small" style={{ marginTop: 16 }} title="Author's Entry">
                    <p>Entry <b>#{entry.id}</b> <br />
                        Entry type: <b>{entry.type}</b><br />
                        Headline: <b>{headline}</b><br />
                        Body Text: <b>{bodyText}</b><br />
                        published: <b>{pubDate}</b><br />
                        modified: <b>{modDate}</b></p>
                    </Card>                    
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchAuthorWithEntry: (authorID) => fetchAuthorWithEntry(authorID),
}

const mapStateToProps = state => ({
    authors: state.authors,
    entries: state.entries
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail);