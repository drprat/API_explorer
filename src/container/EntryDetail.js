import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { fetchEntry } from '../store/actions/entriesActions';

const initialState = {
    entry: {},
    headline: '',
    bodyText: '',
    included: [],
    commentBody: '',
    commentAuthorID: '',
    authorName: '',
    authorEmail: '',
    authorBioBody: '',
    isLoading: false,
    error: false,
    errorMessage: '',
}

class EntryDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const entryID = this.props.match.params.entryID;
        this.props.dispatchFetchEntry(entryID);
    }

    render() {
        const { entries: {
            entry,
            headline,
            bodyText,
            commentBody,
            commentAuthorID,
            authorName,
            authorEmail,
            authorBioBody,
            isLoading,
            errorMessage,
        } } = this.props

        return (
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                <Card size="default" title="Entry detail" loading={isLoading} >

                    <p><Link to="/entries">Entries </Link>/ Details</p>
                    <p>Entry <b>#{entry.id}</b> <br />
                        Entry type: <b>{entry.type}</b><br />
                        Headline: <b>{headline}</b><br />
                        Body Text: <b>{bodyText}</b></p>

                    <Card size="small" style={{ marginTop: 16 }} title="Comments">
                        <p>{commentBody}</p>
                        <p><b>author #</b>{commentAuthorID}</p>
                    </Card>

                    <Card size="small" style={{ marginTop: 16 }} title="Authors">
                        <p><b>Name: </b>{authorName}</p>
                        <p><b>Email: </b>{authorEmail}</p>
                        <p><b>Bio: </b>{authorBioBody}</p>
                    </Card>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchEntry: (entryID) => fetchEntry(entryID),
}

const mapStateToProps = state => ({
    entries: state.entries
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail);
