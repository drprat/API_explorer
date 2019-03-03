import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const BaseLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/blogs">Blogs</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/entries">Entries</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/authors">Authors</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/comments">Comments</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>                
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              
            </Footer>
        </Layout>
    )
}

export default BaseLayout;

