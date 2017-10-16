import React, { Component } from 'react';
import { Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
import {  browserHistory } from 'dva/router';

export default class Client extends Component {

constructor(props){
 super(props);
 console.log('props_ ',props);
 

}
handleDelete = () => {
  console.log('delete');
  
 }//showModal

 handleBack=()=>{
  // console.log('back_ ',browserHistory);
  browserHistory.goBack();
  
 }


  render() {
    return (
      <div>
         <Row style={{ marginTop: 10 }}>
            <Col >
              <Button style={{background:'#333333',color: 'white', marginRight: 10 }} onClick={this.handleBack.bind(this)}  icon="left">返回</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.handleDelete.bind(this)}>删除</Button>
            </Col>
          </Row>
          <hr style={{ marginTop:10 }}/>


       我是客户信息详情
      </div>
    );
  }
}
