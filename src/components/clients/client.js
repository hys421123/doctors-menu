import React, { Component } from 'react';
import {Tabs, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
import {  browserHistory } from 'dva/router';
const TabPane= Tabs.TabPane;
import ClientTab1 from './clientTab1'
import ClientTab2 from './clientTab2'
import ClientTab3 from './clientTab3'

export default class Client extends Component {

constructor(props){
 super(props);
//  console.log('props_ ',props);
 

}
handleDelete = () => {
  console.log('delete');
  
 }//handleDelete

 handleBack=()=>{
  // console.log('back_ ',browserHistory);
  browserHistory.goBack();
  
 }
tabChange=()=>{
  // console.log('tabChange');
  
}

  render() {
    const data=this.props.location.query;
    // console.log('data_ ',data);
    
    return (
      <div>
         <Row style={{ marginTop: 10 }}>
            <Col >
              <Button style={{background:'#333333',color: 'white', marginRight: 10 }} onClick={this.handleBack.bind(this)}  icon="left">返回</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.handleDelete.bind(this)}>删除</Button>
            </Col>
          </Row>
          <hr style={{ marginTop:10 }}/>

          <Row type="flex" justify="center" >
              <h1><b>{data.name}</b></h1>
          </Row>

          <Tabs onChange={this.tabChange.bind(this)} type="card" style={{ marginRight: 200 }} >
              <TabPane tab="客户基本信息" key="1">
                <ClientTab1 data={data}/>
              </TabPane>

              <TabPane tab="发卡信息" key="2">
                <ClientTab2 />
              </TabPane>

              <TabPane tab="账户出入信息" key="3">
                <ClientTab3 />
              </TabPane>

          </Tabs>


   
      </div>
    );
  }
}
