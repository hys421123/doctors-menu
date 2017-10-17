import React, { Component } from 'react';
import {Card, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';

export default class ClientTab2 extends Component {


  handoutCard=()=>{
    console.log('handoutCard');
}

changeCard=()=>{
  console.log('changeCard');
}

  render() {

    const columns=[
      {
          title: '序号',
          render: (t, r, i) => (i + 1),
          className: 'center',
          fixed: 'left'
        },
      
      {
          title: '卡号',
          className: 'center',
          dataIndex: 'card_num',
       
        }, {
          title: '变动类别',
          className: 'center',
          dataIndex: 'change_type',
       
        }, {
          title: '变动时间',
          className: 'center',
          dataIndex: 'change_date',
        
        },  {
          title: '变动原因',
          className: 'center',
          dataIndex: 'change_reason',
         
        },  {
          title: '挂失方式',
          className: 'center',
          dataIndex: 'reportloss_method',
          
        },{
          title: '操作员姓名',
          className: 'center',
          dataIndex: 'change_operator',
        
        },{
          title: ' 登记时间',
          className: 'center',
          dataIndex: 'record_date',
        
        }
      
      ];


    return (
      <div>
       
     <Row style={{ marginTop: 10 ,marginRight:15 }} type="flex" justify="end" >
            <Col >
              <Button  onClick={this.handoutCard.bind(this)}  >发卡</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.changeCard.bind(this)}>换卡</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  >挂失</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  >撤销</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  >退卡</Button>

            </Col>
    </Row>

    <Card  bordered={false} style={{background:'#ECECEC' ,marginTop: 20}}>

          <div>  {/* 发卡信息部分 */}
              <Row  justify="start" >
                  <Col>
                    <b>发卡信息</b>
                    <hr />
                  </Col>

              </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="4">
                卡类型: 
              </Col>
              <Col span="4">
                卡号: 
              </Col>

              <Col span="4">
                是否充值卡: 
              </Col>
              <Col span="4">
                发卡原因: 
              </Col>

              <Col span="4">
                领卡人: 
              </Col>
              <Col span="4">
                领卡部门: 
              </Col>
              

          </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="4">
                备注: 
              </Col>
              <Col span="4">
                发卡人: 
              </Col>

              <Col span="4">
                发卡日期: 
              </Col>
              <Col span="4">
                卡费: 
              </Col>

              <Col span="4">
                当前余额:
              </Col>
              <Col span="4">
                卡有效期: 
              </Col>
          </Row>

          <Row style={{ marginTop: 10 }} justify="start"  type="flex" >
              <Col span="4">
                充值折扣: 
              </Col>
           
              
      
          </Row>
          
           </div> {/* 以上是发卡信息部分 */}

        </Card>

        <Table
            style={{ marginTop:20 }}
                columns={columns}
                dataSource={null}
              />

      </div>
    );
  }
}
