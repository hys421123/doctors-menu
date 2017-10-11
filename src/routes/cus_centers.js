import React, { Component } from 'react';


import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link } from 'dva/router'


import {Button,Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider } = Layout;



export default class CusCenter extends Component {

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
        <div>
   <Layout>
   <Content style={{ padding: '0 0px' }}>

     <Layout style={{ padding: '10px 0', background: '#fff' }}>
       <Sider
        width={150} 
        style={{ background: '#fff' }} 
        collapsible={true}
        collapsed={this.state.collapsed}
        trigger={null}
        collapsedWidth={0}
         >
         {/* collapsed={this.state.collapsed} */}
       
         
     
         {/* 侧边导航栏 */}
         <Menu
           mode="inline"
           defaultSelectedKeys={['1']}
           defaultOpenKeys={['sub1']}
           style={{ height: 280 }}
         >
           
         <Menu.Item key="1">
         <Icon type="pie-chart" />
         <span>客户信息管理</span>
       </Menu.Item>
        
         </Menu>
       </Sider>

       <Button   size={'small'} onClick={this.toggle}  style={{ marginTop:30 }} >
       <Icon   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
     </Button>

       {/* <Icon
           className="trigger"
           type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
           onClick={this.toggle}
           style={{ marginTop:30 }} 
         /> */}
       {/* 右边主内容 */}
       <Content style={{ padding: '0 24px', minHeight: 280 }}>
         {this.props.children}
       </Content>
     </Layout>
   </Content>

 </Layout>
    </div>
     

    );
  }
}
