import React from 'react';
import { Table } from 'antd';

const col = [{
    title: 'ID',
    dataIndex: 'id',
    render: text => <a href={`entries/${text}`}>{text}</a>,
},
{
    title: 'attributes headline',
    dataIndex: 'attributes.headline',
    key: 'attributes.headline',
},
{
    title: 'attributes bodyText',
    dataIndex: 'attributes.bodyText',
    key: 'attributes.bodyText',
},
{
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: text => (
        <span>
            <a href={`entries/${text}`}>Details</a>
        </span>
    ),
}]

const Entries = (props) => {
    return (
        <Table loading={props.loading} columns={col} dataSource={props.data} />
    )
}

export default Entries;