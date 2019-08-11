import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input, Divider } from 'antd';
import { fileToObject } from 'antd/lib/upload/utils';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
const { Footer, Content, Sider } = Layout;
const{Search} = Input;

const CustomLayout = (props) => {
    return (

        <Layout>


            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: fileToObject }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>

            <Layout style={{ minHeight: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ 
                            width: 200,
                            padding: 10,
                         }}
                    />
                    <Divider orientation="left">Report</Divider>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: fileToObject, borderRight: 1 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    subnav 1
              </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    subnav 2
              </span>
                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="notification" />
                                    subnav 3
              </span>
                            }
                        >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{
                    padding: '0 15px 15px',

                }}>
                    <Breadcrumb style={{
                        margin: '10px 0',
                        textAlign: 'left'
                    }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                        
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: fileToObject,
                        }}
                    >
                        {props.children}
                    </Content>
                    <Footer style={{ 
                        textAlign: 'center',
                        margin: 0 
                        }}>
                            Copyright ©2018 Created by Enterprise Fiber Team
                </Footer>
                </Layout>

            </Layout>



        </Layout >
    );
}

export default CustomLayout;


