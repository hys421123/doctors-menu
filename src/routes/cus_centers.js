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
      }
}//constructor
toggle = () => {    

  this.setState({
    collapsed: !this.state.collapsed,
  });

  }


  render() {
    // const { children } = this.props;
    // console.log('children ',children);
    
    
    return (
        <div style={{ height:'100%' }}>
{/* Layout 为客户中心的整块内容 #fff为白色背景 */}
     <Layout style={{ padding: '10px 0', background: '#fff' }}>
     <Sider
        width={150} 
        style={{  background: '#d9d9d9'  }}
        collapsible={true}
        collapsed={this.state.collapsed}
        trigger={null}
        collapsedWidth={0}
         >
         {/* collapsed={this.state.collapsed} */}
         <div className="logo" />
         
     
         {/* 侧边导航栏 */}
         <Menu
            theme="dark"
           mode="inline"
           
           defaultOpenKeys={['sub1']}
           
          
         >
         {/* style={{ height: 500 }} */}

         <Menu.Item key="1">
 
         <Link to={'/cus_centers/cuscenters_content'}> 
            <Icon type="pie-chart" />
            <span>客户信息管理</span>
         </Link>
       </Menu.Item>

        
         </Menu>
       </Sider>

       <Button   size={'small'} onClick={this.toggle}  style={{ marginTop:30 }} >
       <Icon   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
     </Button>


       {/* 右边主内容 */}
       <Content style={{ padding: '0 24px', minHeight: 280 }}>
         {this.props.children}
       </Content>
     </Layout>
     

    </div>
     

    );
  }
}
