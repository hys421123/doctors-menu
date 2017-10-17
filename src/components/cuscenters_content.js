import React, { Component } from 'react';
import { Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

import styles from './center.less'

const Option = Select.Option;
const FormItem = Form.Item;
var events = require('events');
var eventEmitter = new events.EventEmitter();
import {  browserHistory,routerRedux,Link } from 'dva/router';

export default class Content1 extends Component {


  submit = (search1) => {
    //利用事件 分发机制，从 TopQueryForm组件向 Table组件传递search 信息
    //  eventEmitter.emit('search',search1);
   }

  //  style={{background:'#F8F8F8' }}

  render() {
    return (
      <div  >
       

      <div className={styles.ant_advanced_search_form}>
       <Row >
          <TopQueryForm submitd={this.submit.bind(this)}  />
      </Row>
      </div>
      <Table2  />

      </div>
    );
  }
}

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
//最上方的查询表单
@Form.create()
class TopQueryForm extends React.Component {
	constructor(props){
		super(props);
	}//constructor
  reset = () => {
    this.props.form.resetFields();
  }
 handleSubmit = (e) => {
    e.preventDefault();//取消默认的行为
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.props.submitd(value);
      }
    });
  }

 render() {
    const { getFieldDecorator } = this.props.form;

    // console.warn('props_ ',this.props);
    
    // 登记时间 规则配置
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
   
      <Form onSubmit={this.handleSubmit} >
        
        <Row type="flex" justify="start" >
          <Col span="8">
          <FormItem
          {...formItemLayout}
          label="登记时间"
        >
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker 
            showTime 
            format="YYYY-MM-DD HH:mm:ss" 
            placeholder={['开始时间', '截止时间']}
            
            />
          )}
        </FormItem>

          </Col>
          <Col span="4">
            <FormItem
              label="病人ID："
              {...formItemLayout}
            >
              {getFieldDecorator('contractnum_LK')(
				        <Input placeholder="请输入病人ID" />
              )}
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem
              label="就诊卡："
              {...formItemLayout}
            >
              {getFieldDecorator('status_EQ')(
                <Input placeholder="请输入就诊卡号" />
              )}
            </FormItem>
          </Col>

      
        </Row>
      
        <Row type="flex" justify="start" >
          <Col span="8">
          <FormItem
          {...formItemLayout}
          label="出生日期"
        >
        <Col span="8">
              <FormItem>
          {getFieldDecorator('birthdate1')(
            <DatePicker
            placeholder="年/月/日"
            />
          )}
          </FormItem>
          </Col>
      <Col span={2}>
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          至
        </span>
      </Col>

      <Col span="8">
              <FormItem>
          {getFieldDecorator('birthdate2')(
            <DatePicker
            placeholder="年/月/日"
            />
          )}
          </FormItem>
      </Col>
       
          
        </FormItem>

          </Col>
          <Col span="4">
            <FormItem
              label="身份证："
              {...formItemLayout}
            >
              {getFieldDecorator('contractnum_LK')(
				        <Input placeholder="请输入身份证" />
              )}
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem
              label="姓名："
              {...formItemLayout}
            >
              {getFieldDecorator('status_EQ')(
                <Input placeholder="请输入姓名" />
              )}
            </FormItem>
          </Col>

          <Col span="4">
            <FormItem
              label="性别："
              {...formItemLayout}
            >
              {getFieldDecorator('status_EQ')(
                <Input placeholder="请输入性别" />
              )}
            </FormItem>
          </Col>

        </Row>

        <Row type="flex" justify="end" >
        <Col span="4" >
            <Col  >
              <FormItem>
                <Button style={{ width: '50%', maxWidth: 90 }} type="primary" htmlType="submit">查詢</Button>
                <Button style={{ width: '50%', maxWidth: 90 ,marginLeft:10}} onClick={this.reset}>重置</Button>
              </FormItem>
            </Col>
          </Col>

        </Row>

      </Form>
  
      );//retrun
          }//render()

}//TopQueryForm



// 下面的 合同表单组件
class Table2 extends React.Component{
	constructor(props){
		super(props);
this.state = {
    loading: false,
    pagesize: 10,
    data: [],

    selectedRowKeys: [],
    checkeddata: [],
    modalInfo: {
      visible: false,
    },
  };

  const that=this;
  // 接收search信息，查询相应数据
  eventEmitter.on('search',function (searchParams) {
                         that.getData(1,searchParams);
                              
                  }
  );

	}//constructor

componentDidMount() {
    this.getData(1);
  }

  showModal = (modalInfo) => {
   modalInfo.visible = true;
   // console.info('showModal_ ',modalInfo);
    this.setState({
      modalInfo,
    });
  }//showModal

 closeModal = (closeAndGetNewDate) => {
    this.setState({
      modalInfo: {
        visible: false,
      },
    });
    if (closeAndGetNewDate) {
      this.getData(1);
    }
  }//closeModal

 getData = (page,search2) => {

const that=this;
fetch('/users',{                       // 发送请求
  method:'GET',                            //请求方式    (可以自己添加header的参数)    
  mode:'cors',// 避免cors攻击
  credentials: 'include'                
}).then(function(response) {
  //打印返回的json数据
  response.json().then(function(data){      //将response进行json格式化
    // console.log(data.data);                        //打印

   that.setState({ data: data.data });

  }); 
}).catch(function(e) {
  console.log("Oops, error");
});

  }

  action = (key) => {
//       if(key=='del'){

//  $q.del($q.url + '/hys/contract/deleteByIds',JSON.stringify(this.state.selectedRowKeys) ,  data => {
//       console.info('返回信息',data);
//       if(data.code === '1'){
//         message.success('操作成功');
//       }else{
//         message.error('操作失敗');
//       }
//       this.getData(1);
//     });


//       }//if

//     if(key=='gets'){
//           console.info('gets_method');
//      $q.post($q.url+'/hys/contract/getByIds2',JSON.stringify(this.state.selectedRowKeys), data=> {
//       console.log(data);
//     });


//       }//if

  }//action

  handleAdd=()=>{
      console.log('add_');
         browserHistory.push({
                    pathname:  '/cus_centers/client_add',
                    
                  });
  }

  readCard=()=>{
    console.log('readCard');
    
  }


  medicalOrder=()=>{
    console.log('medicalOrder');

 }


	render(){
// console.log('Table2_ ',this.props);
const data2=[{
  id: 1,
  register_date:'2015',
  card_type: '诊疗卡',

  key: 1,
},{
  id: 2,
  register_date:'2016',
  card_type: '诊疗卡',

  key: 2,
}];

const columns=[
	{
      title: '序号',
      render: (t, r, i) => (i + 1),
      className: 'center',
      fixed: 'left'
    },
	
	{
      title: '登记时间',
      className: 'center',
      dataIndex: 'register_date',
   
    }, {
      title: '医疗卡类型',
      className: 'center',
      dataIndex: 'card_type',
   
    }, {
      title: '卡号',
      className: 'center',
      dataIndex: 'card_id',
    
    },  {
      title: '状态',
      className: 'center',
      dataIndex: 'card_state',
     
    },  {
      title: '发卡人',
      className: 'center',
      dataIndex: 'card_distributor',
      
    },{
      title: '发卡日期',
      className: 'center',
      dataIndex: 'card_date',
    
    },{
      title: ' 姓名',
      className: 'center',
      dataIndex: 'name',
    
    },{
      title: '性别',
      className: 'center',
      dataIndex: 'gender',
    
    },{
      title: '年龄',
      className: 'center',
      dataIndex: 'age',
    
    },{
      title: '出生日期',
      className: 'center',
      dataIndex: 'birthdate',
    
    },{
      title: '出生地点',
      className: 'center',
      dataIndex: 'birthplace',
    
    },{
      title: '身份证号',
      className: 'center',
      dataIndex: 'certificate_num',
    
    },{
      title: '电话',
      className: 'center',
      dataIndex: 'phonenum',
    
    },{
      title: '电子邮件',
      className: 'center',
      dataIndex: 'email',
    
    },{
      title: '门诊号',
      className: 'center',
      dataIndex: 'clinicnum',
    
    },{
      title: '国籍',
      className: 'center',
      dataIndex: 'country',
    },{
      title: '家庭住址',
      className: 'center',
      dataIndex: 'address',
    },{
      title: '联系人',
      className: 'center',
      dataIndex: 'contact_name',
    },{
      title: '联系人电话',
      className: 'center',
      dataIndex: 'contact_phone',
    },{
      title: '联系人关系',
      className: 'center',
      dataIndex: 'contactRelation',
    },{
      title: '工作单位',
      className: 'center',
      dataIndex: 'company',
    },{
      title: '登记人',
      className: 'center',
      dataIndex: 'createUser',
    },{
      // 卡变动记录中的 操作员即 挂失人
      title: '挂失人',
      className: 'center',
      dataIndex: 'changeOperator',
    },{
      title: '挂失方式',
      className: 'center',
      dataIndex: 'reportLoss',
    },{
      title: '挂失时间',
      className: 'center',
      dataIndex: 'changeDate',
    }
  
  ];

// console.log('this.state.data_ ',this.state.data);
// console.log('data2_ ',data2);

const that=this;

  return (
      <div>
        <Spin spinning={this.state.loading === true}>
          {/* <ActionModal modalInfo={this.state.modalInfo} closeModal={this.closeModal.bind(this)}   {...this.props}/> */}

          <Row style={{ marginTop: 10 }}>
      
            <Col className={styles.ant_advanced_search_form} style={{ background: '#CCCCCC',marginBottom: 10 }}>
              <Button style={{background:'#333333',color: 'white', marginRight: 10 }} onClick={this.handleAdd.bind(this, { type: 'add' })}>新增</Button>
              <Button style={{ marginRight: 10 }} disabled={this.state.selectedRowKeys.length !== 1} onClick={this.readCard.bind(this, { type: 'modify', con: this.state.checkeddata[0] })}>读卡</Button>
              <Button disabled={this.state.selectedRowKeys.length === 0} style={{ marginRight: 10 }} onClick={this.action.bind(this, 'del')}>刪除</Button>
              <Button style={{ marginRight: 10 }} onClick={this.medicalOrder.bind(this)}>就诊预约</Button>
            </Col>
            <Col>
            {/* this.state.data.data */}
            {/* this.state.data */}
              <Table
                columns={columns}
                dataSource={this.state.data}

               rowClassName={(record, index) => {
                  return this.state.selectedRowKeys.indexOf(record.id) === -1 ? '' : 'select-active';
                }}
                onRowClick={(record, index, event) => {
                  {/* const selectedRowKeys = this.state.selectedRowKeys;
                  const checkeddata = this.state.checkeddata;
                  const keyIndex = selectedRowKeys.indexOf(record.id); */}
                  console.log('onRowClick2_browserHistory',browserHistory);

                  // Link 之外的 跳法

                  {/* console.log('record.data',record); */}
                  
                  {/* 一种跳转 传参写法 */}
                  browserHistory.push({
                    pathname:  '/cus_centers/client_details',
                    query: record,
                  });
                  
                  {/* 这种写法貌似只跟 goBack组成一起 使用 */}
                  {/* browserHistory.goForward({
                    pathname:  '/cus_centers/client_details',
                    query: record,
                  }); */}
           

                  {/* if (keyIndex === -1) {
                    selectedRowKeys.push(record.id);
                    checkeddata.push(record);
                  } else {
                    selectedRowKeys.splice(keyIndex, 1);
                    checkeddata.splice(keyIndex, 1);
                  }
                  this.setState({
                    selectedRowKeys, checkeddata,
                  }); */}
                }}
                rowSelection={{
                  selectedRowKeys: this.state.selectedRowKeys,
                  onChange: (selectedRowKeys, checkeddata) => {
                    this.setState({ selectedRowKeys, checkeddata });
                  },
                }}
                rowKey={record => record.id} 
                scroll={{ x: '200%' }}
               
              />

            </Col>
          </Row>
        </Spin>
      </div>
        );//return
	}//render

}//Table2_cls