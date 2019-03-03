import React from 'react';
import { connect } from 'react-redux';

import Authors from '../components/Authors'
import { fetchAuthors } from '../store/actions/authorsActions'

const initialState = {
    authors: [],
    isLoading: false,
    error: false,
    errorMessage: '',
}

class AuthorsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.props.dispatchFetchAuthors();
    }

    render() {
        const { authors: {
            authors,
            isLoading,
            errorMessage,
        } } = this.props
        return (
            <div>
                <b style={{ color: 'orange' }}>{errorMessage}</b>
                <Authors loading={isLoading} data={authors} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchAuthors: () => fetchAuthors(),
}

const mapStateToProps = state => ({
    authors: state.authors
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);