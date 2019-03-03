import React from 'react';
import { Table } from 'antd';

const col = [{
    title: 'ID',
    dataIndex: 'id',
    render: text => <a href={`blogs/${text}`}>{text}</a>,
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
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: text => (
        <span>
            <a href={`blogs/${text}`}>Details</a>
        </span>
    ),
}]

const Blogs = (props) => {
    return (
        <Table loading={props.loading} columns={col} dataSource={props.data} />
    )
}

export default Blogs;