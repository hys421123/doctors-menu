import React, { Component } from 'react';
import { Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';

export default class ClientTab1 extends Component {
    handleEdit=()=>{
        // console.log('back_ ',browserHistory);
      console.log('edit');
      
    }      

    phoneVerify=()=>{
        console.log('phoneVerify');
        
    }

    insuranceVerify=()=>{
        console.log('insuranceVerify');
        
    }



  render() {
    return (
      <div  >
     <Row style={{ marginTop: 10 }} type="flex" justify="end" >
            <Col >
              <Button  onClick={this.handleEdit.bind(this)}  >编辑</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.phoneVerify.bind(this)}>电话验证</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.insuranceVerify.bind(this)}>保险验证</Button>

            </Col>
    </Row>
       tab1
      </div>
    );
  }
}
