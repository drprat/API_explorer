import React from 'react';
import { Table } from 'antd';

const col = [{
    title: 'ID',
    dataIndex: 'id',
    render: text => <a href={`comments/${text}`}>{text}</a>,
}, 
{
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
}, 
{
    title: 'attributes body',
    dataIndex: 'attributes.body',
    key: 'attributes.body',
}, 
{
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: text => (
        <span>
            <a href={`comments/${text}`}>Details</a>
        </span>
    ),
}]

const Comments = (props) => {
    return (
        <Table loading={props.loading} columns={col} dataSource={props.data} />
    )
}

export default Comments;