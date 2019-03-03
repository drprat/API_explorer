import React from 'react';
import { connect } from 'react-redux';

import Entries from '../components/Entries';
import { fetchEntries } from '../store/actions/entriesActions'

const initialState = {
    entries: [],
    isLoading: false,
    error: false,
    errorMessage: '',
}

class EntriesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // getEntries = () => {
    //     this.props.dispatchFetchEntries();
    // }

    componentDidMount() {
        this.props.dispatchFetchEntries();
    }

    render() {
        const { entries: {
            entries,
            isLoading,
            errorMessage,
        } } = this.props
        return (
            <div>
                <b style={{ color: 'orange' }}>{errorMessage}</b>
                <Entries loading={isLoading} data={entries} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    dispatchFetchEntries: () => fetchEntries(),
}

const mapStateToProps = state => ({
    entries: state.entries
})

export default connect(mapStateToProps, mapDispatchToProps)(EntriesList);