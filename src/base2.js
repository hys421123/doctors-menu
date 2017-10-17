import React, { Component } from 'react';


import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link } from 'dva/router'


import {Button,Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';
import Head from './components/head/head.js'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider } = Layout;



export default class Base extends Component {

constructor(props){
     super(props);
    //  console.log('Base_props',this.props);
     this.state = {
        theme: 'dark',
        current: '1',
        collapsed: false,
        marginsize:180,
      }
}//constructor
toggle = () => {    
    if(this.state.collapsed){
      this.setState({
        collapsed: false,
        marginsize: 180,
      });
    }else{
      this.setState({
        collapsed: true,
        marginsize: 50,
      });
    }//if_else
  }


  render() {
    // const { children } = this.props;
    // console.log('children ',children);
    
    
    return (
        <div style={{ height:'100%' , background: '#BB3ED3' }} >
       
        <div  >
        <Head />
        </div>

        <Layout  style={{ height:'100%',background:'#F8F8F8' }} >
      
      <Header >
   
       

        {/* 顶部导航栏 */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
          <Link to={'/cus_centers'}> 客户中心</Link>

          </Menu.Item>
          <Menu.Item key="2">
          <Link to={'/doctors'}> 医生站</Link>
          </Menu.Item>
          <Menu.Item key="3">收费管理</Menu.Item>
        </Menu>
      </Header>

          <Content style={{ height:'100%' }}>
            {this.props.children}
            
          </Content>
   
      <Footer style={{ textAlign: 'center', height:50, background: '#C2BFBF' }}>
        Ant Design ©2017 Created by Ant UED
      </Footer>
    </Layout>

    </div>
     

    );
  }
}
