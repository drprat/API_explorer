import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { fetchAuthor } from '../store/actions/authorsActions';

const initialState = {
    author: {},
    name: '',
    email: '',
    entry: [],
    isLoading: false,
    error: false,
    errorMessage: '',
}

class AuthorDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const authorID = this.props.match.params.authorID;
        this.props.dispatchFetchAuthor(authorID);
    }

    render() {
        const { authors: {
            author,
            name,
            email,
            entry,
            isLoading,
            errorMessage,
        } } = this.props

        return (
            <div><b style={{ color: 'orange' }}>{errorMessage}</b>
                <Card size="default" title="Author detail" loading={isLoading}>
                    <p><Link to="/authors">Authors </Link>/ Details</p>
                    <p>Author <b>#{author.id}</b> <br />
                        Name: <b>{name}</b><br />
                        Email: <b>{email}</b></p>

                    <Table columns={[
                        {
                            title: 'Entry ID',
                            dataIndex: 'id'
                        },
                        {
                            title: 'Type', dataIndex: 'type'
                        },
                        {
                            title: 'Action',
                            dataIndex: 'id',
                            key: 'id',
                            render: text => (
                                <span>
                                    <a href={`entries/${text}`}>Entry details</a>
                                </span>
                            ),
                        }]} dataSource={entry} />
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchAuthor: (authorID) => fetchAuthor(authorID),
}

const mapStateToProps = state => ({
    authors: state.authors
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail);