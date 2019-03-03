import React from 'react';
import { Table } from 'antd'

const col = [{
    title: 'ID',
    dataIndex: 'id',
    render: text => <a href={`authors/${text}`}>{text}</a>,
},
{
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
},
{
    title: 'attributes name',
    dataIndex: 'attributes.name',
    key: 'attributes.name',
},
{
    title: 'Email',
    dataIndex: 'attributes.email',
    key: 'attributes.email',
},
{
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: text => (
        <span>
            <a href={`authors/${text}`}>Details</a>
        </span>
    ),
}]

const Authors = (props) => {
    return (
        <Table loading={props.loading} columns={col} dataSource={props.data} />
    )
}

export default Authors;