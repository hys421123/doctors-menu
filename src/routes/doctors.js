import React, { Component } from 'react';


import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link } from 'dva/router'


import {Button,Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider } = Layout;



export default class Doctors extends Component {

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

     <Layout style={{ padding: '24px 0', background: '#fff' }}>
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
           <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
      
             <Menu.Item key="1">
             <Link to={'/doctors/test2'}> {'test2'}</Link>
             </Menu.Item>
             <Menu.Item key="4">
             <Link to={'/test4'}> {'test4'}</Link>
           </Menu.Item>
           </SubMenu>
           <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
             <Menu.Item key="5">option5</Menu.Item>
             <Menu.Item key="6">option6</Menu.Item>
             <Menu.Item key="7">option7</Menu.Item>
             <Menu.Item key="8">option8</Menu.Item>
           </SubMenu>
           <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
             <Menu.Item key="9">option9</Menu.Item>
             <Menu.Item key="10">option10</Menu.Item>
             <Menu.Item key="11">option11</Menu.Item>
             <Menu.Item key="12">option12</Menu.Item>
           </SubMenu>
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
