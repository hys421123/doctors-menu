import React, { Component } from 'react';
import { Checkbox ,Card, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';

export default class ClientTab3 extends Component {

  prestore=()=>{

  }

  prestoreWriteoff=()=>{// 预存冲销

  }

  onChange=()=>{// checkbox 是否选择

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
          title: '收款时间',
          className: 'center',
          dataIndex: 'card_num',
       
        }, {
          title: '业务类型',
          className: 'center',
          dataIndex: 'change_type',
       
        }, {
          title: '初期余额',
          className: 'center',
          dataIndex: 'change_date',
        
        },  {
          title: '本期充值',
          className: 'center',
          dataIndex: 'change_reason',
         
        },  {
          title: '本期消费',
          className: 'center',
          dataIndex: 'reportloss_method',
          
        },{
          title: '期末余额',
          className: 'center',
          dataIndex: 'change_operator',
        
        }
      
      ];

    return (
      <div>
    <Row style={{ marginTop: 10 }} type="flex" justify="end" >
            <Col >
              <Button  onClick={this.prestore.bind(this)}  >预存</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.prestoreWriteoff.bind(this)}>预存冲销</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  >余额退款</Button>
       

            </Col>
    </Row>

    <Card title="账户入出信息"  style={{marginTop: 20}}>
        <Checkbox onChange={this.onChange.bind(this)}>只看充值历史</Checkbox>
        
        <Table
            style={{ marginTop:20 }}
                columns={columns}
                dataSource={null}
              />
    </Card>
      </div>
    );
  }
}
