import React, { Component } from 'react';
import {Tabs, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
import {  browserHistory } from 'dva/router';
const FormItem=Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
import CardModal from './cardModal'


export default class ClientAdd extends Component {

  constructor(props){
   super(props);
   this.state={
    visible:false,
   };
  }
  // 确认框弹出
  showConfirm=()=> {
    const that=this;

    confirm({
      title: '确认保存客户信息吗?',
    
      onOk() {
        // console.log('confirm_OK');
        that.setState({
          visible:true,
        });


      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  closeModal=()=>{
    this.setState({
      visible:false,
    });
  }


  handleBack=()=>{
    // console.log('back_ ',browserHistory);
    browserHistory.goBack();
    
   }

   handleSave=()=>{
        console.log('保存发卡了');
     
   }

   handleReadCard=()=>{

   }
   handleSaveSend=()=>{
      // console.log('保存发卡 in ClientAdd');
      this.showConfirm();
   }

  render() {

    // console.log('state_visible ',this.state.visible );
    
    

    return (
      <div>
         <Row style={{ marginTop: 10 }}>
            <Col >
              <Button style={{background:'#333333',color: 'white', marginRight: 10 }} onClick={this.handleBack.bind(this)}  icon="left">返回</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.handleSave.bind(this)}>保存(F10)</Button>
              <Button style={{background:'#333333',color: 'white' }}  onClick={this.handleReadCard.bind(this)}>读卡(F11)</Button>
              <Button style={{background:'#333333',color: 'white' }}  onClick={this.handleSaveSend.bind(this)}>保存并发卡(回车)</Button>

            </Col>
          </Row>
          <hr style={{ marginTop:10 }}/>
          <Row type="flex" justify="center" style={{ marginTop:6 }} >
              <h1><b>新增客户信息</b></h1>
          </Row>
         
          <ClientForm handleSaveSend={this.handleSaveSend.bind(this) }/>
          <CardModal visible={this.state.visible} closeModal={this.closeModal.bind(this)}/>
      </div>
    );
  }//render
}  //ClientAdd_cls

@Form.create()
class ClientForm extends Component{
  handleSubmit = (e) => {
      console.log('submit');
      

  }

  handleAdd=()=>{
    console.log('新增保险');
    
  }


handleSave=()=>{
        console.log('save');
        
           }    

  render(){
    const { getFieldDecorator } = this.props.form;

    const columns=[
      {
          title: '序号',
          render: (t, r, i) => (i + 1),
          className: 'center',
          fixed: 'left'
        },
      
      {
          title: '保险公司',
          className: 'center',
          dataIndex: 'card_num',
       
        }, {
          title: '保险类型',
          className: 'center',
          dataIndex: 'change_type',
       
        }, {
          title: '保险号',
          className: 'center',
          dataIndex: 'change_date',
        
        },  {
          title: '保险效期',
          className: 'center',
          dataIndex: 'change_reason',
         
        },  {
          title: '操作',
          className: 'center',
          dataIndex: 'reportloss_method',
          
        }
      
      ];

    return(
      <Form onSubmit={this.handleSubmit}>
 <Row justify="start" style={{  marginTop:10,paddingLeft:20,background:"#F2F7FA" }}>
            <h2><font color="#2CB6C0">个人信息</font></h2>
          </Row>

          <Row style={{  marginTop:20}}>
			      <Col span="3">
		    	  	<FormItem label="姓名：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			            
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	  ( <Input  type="input" placeholder="请输入姓名" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="3">
		    	  	<FormItem label="性别：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			           { 
                  getFieldDecorator('gender', {
                    rules: [{ required: true, message: '此項必填' }],
                     })
			        	  (      <Select placeholder="请选择性别">
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="2">
		    	  	<FormItem label="年龄：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			           { 
                  getFieldDecorator('age', {
                    })
			        	 
			        	  ( <Input  type="input" placeholder="请输入年龄" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="出生日期：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('birthdate')(
                    <DatePicker
                    placeholder="年/月/日"
                    />
                  )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="移动电话：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('phoneNum', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	 
			        	  ( <Input  type="input" placeholder="请输入移动电话" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="证件类型：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('certificate_type', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	 
			        	  ( <Select placeholder="请选择证件类型">
                  <Option value="male">身份证</Option>
                  <Option value="female">军官证</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="证件编号：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('certificate_num', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	 
			        	  ( <Input  type="input" placeholder="请输入证件编号" /> )
			           }  
			          </FormItem>
		    	  </Col>

                   
          </Row>

 {/* 第二行 个人信息_出生地*/}
          <Row >
			      <Col span="3">
		    	  	<FormItem label="出生地点：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			            
                  {getFieldDecorator('name', {
                     })
			        	  ( <Input  type="input" placeholder="请输入出生地" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="3">
		    	  	<FormItem label="国籍：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			           { 
                  getFieldDecorator('country', {
                  })
			        	 
			        	  ( <Select placeholder="请选择国籍">
                  <Option value="male">中国</Option>
                  <Option value="female">外国</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="2">
		    	  	<FormItem label="民族：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			           { 
                  getFieldDecorator('age', {
                    })
			        	 
			        	  ( <Select placeholder="请选择民族">
                  <Option value="male">汉族</Option>
                  <Option value="female">少数民族</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="婚姻：" labelCol={{ span: 8 }}  wrapperCol={{ span: 13 }}>
			           { 
                  getFieldDecorator('marriage', {
                   })
			        	 
			        	  ( <Select placeholder="请选择婚姻状况">
                  <Option value="male">未婚</Option>
                  <Option value="female">已婚</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="学历：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('phoneNum', {
                    })
			        	 
			        	  ( <Select placeholder="请选择学历">
                  <Option value="male">本科</Option>
                  <Option value="female">研究生</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="客户等级：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('certificate_type', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	 
			        	  ( <Select placeholder="请选择客户等级">
                  <Option value="male">1级</Option>
                  <Option value="female">2级</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="病人来源：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('certificate_num', {
                   })
			        	 
			        	  ( <Select placeholder="请选择病人来源">
                  <Option value="male">诊所</Option>
                  <Option value="female">医院</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
          </Row>

        <Row justify="start" style={{  marginTop:10,paddingLeft:20,background:"#F2F7FA" }}>
            <h2><font color="#2CB6C0">家庭信息</font></h2>
          </Row>


{/* 第三行 家庭信息_出生地*/}
          <Row style={{  marginTop:20}} >
            {/* 所在地区 */}
			      <Col span="10">
		    	  	<FormItem label="所在地区：" labelCol={{ span: 3 }}  wrapperCol={{ span: 21 }}>
			            
              <Col span="6">
              <FormItem>
          {getFieldDecorator('birthdate1')(
            <Select placeholder="请选择所在省">
            <Option value="male">湖北省</Option>
            <Option value="female">湖南省</Option>
          </Select>
          )}
          </FormItem>
          </Col>
      <Col span="1">
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          省
        </span>
      </Col>

      <Col span="6">
              <FormItem>
          {getFieldDecorator('birthdate2')(
            <Select placeholder="请选择所在市">
            <Option value="male">武汉市</Option>
            <Option value="female">长沙市</Option>
          </Select>
          )}
          </FormItem>
      </Col>
      <Col span="1">
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          市
        </span>
      </Col>
      <Col span="6">
              <FormItem>
          {getFieldDecorator('birthdate2')(
            <Select placeholder="请选择所在区">
            <Option value="male">武昌区</Option>
            <Option value="female">岳麓区</Option>
          </Select>
          )}
          </FormItem>
      </Col>
      <Col span="1">
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          区
        </span>
      </Col>
			          </FormItem>
		    	  </Col>



            {/* 详细地址 */}
            <Col span="10">
		    	  	<FormItem label="详细地址：" labelCol={{ span: 3 }}  wrapperCol={{ span: 21 }}>
			           { 
                  getFieldDecorator('gender', {
                    
                     })
			        	  (     <Input  type="input" placeholder="请输入详细地址" /> )
			           }  
			          </FormItem>
		    	  </Col>

            {/* 家庭电话 */}
            <Col span="4">
		    	  	<FormItem label="家庭电话：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('familyphone', {
                    })
			        	 
			        	  ( <Input  type="input" placeholder="请输入家庭电话" /> )
			           }  
			          </FormItem>
		    	  </Col>
          </Row>


<Row justify="start" style={{  marginTop:20,paddingLeft:20,background:"#F2F7FA" }}>
            <h2><font color="#2CB6C0">工作信息</font></h2>
  </Row>
{/* 第四行 工作信息_职业*/}
<Row style={{  marginTop:20}}>
			      <Col span="3">
		    	  	<FormItem label="职业：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			            
                  {getFieldDecorator('name', {
                   })
			        	  ( <Input  type="input" placeholder="请输入职业" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="3">
		    	  	<FormItem label="身份：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			           { 
                  getFieldDecorator('gender', {
                   
                     })
			        	  (      <Select placeholder="请选择身份">
                  <Option value="male">工人</Option>
                  <Option value="female">农民</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="10">
		    	  	<FormItem label="工作单位：" labelCol={{ span: 5 }}  wrapperCol={{ span: 19 }}>
			           { 
                  getFieldDecorator('age', {
                    })
			        	 
			        	  ( <Input  type="input" placeholder="请输入年龄" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="单位电话：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('birthdate')(
                    <Input  type="input" placeholder="请输入单位电话" /> 
                  )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="电子邮件：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('phoneNum', {
                   })
			        	 
			        	  ( <Input  type="input" placeholder="请输入电子邮件" /> )
			           }  
			          </FormItem>
		    	  </Col>
           
          
          </Row>



{/* 第五行 工作信息_联系人姓名*/}
<Row >
			      <Col span="3">
		    	  	<FormItem label="联系人姓名：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			            
                  {getFieldDecorator('name', {
                   })
			        	  ( <Input  type="input" placeholder="请输入联系人姓名" /> )
			           }  
			          </FormItem>
		    	  </Col>
   
            <Col span="13">
		    	  	<FormItem label="联系人地址：" labelCol={{ span: 3 }}  wrapperCol={{ span: 21 }}>
			           { 
                  getFieldDecorator('age', {
                    })
			        	 
			        	  ( <Input  type="input" placeholder="请输入联系人地址" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="联系人电话：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('birthdate')(
                    <Input  type="input" placeholder="请输入联系人电话" /> 
                  )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="4">
		    	  	<FormItem label="联系人关系：" labelCol={{ span: 8 }}  wrapperCol={{ span: 16 }}>
			           { 
                  getFieldDecorator('phoneNum', {
                   })
			        	 
			        	  ( <Input  type="input" placeholder="请输入联系人关系" /> )
			           }  
			          </FormItem>
		    	  </Col>
           
          
          </Row>


{/* 第六行 其他信息_*/}
  <Row justify="start" style={{  marginTop:20,paddingLeft:20,background:"#F2F7FA" }}>
            <h2><font color="#2CB6C0">其他信息</font></h2>
  </Row>
  <Row style={{  marginTop:12}} >
			     <Col span="4">
		    	  	<FormItem label="医疗付款方式：" labelCol={{ span: 10 }}  wrapperCol={{ span: 14 }}>
			            
                  {getFieldDecorator('payment_method', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	  ( <Select placeholder="请选择医疗付款方式">
            <Option value="male">现金</Option>
            <Option value="female">医保卡</Option>
          </Select> )
			           }  
			          </FormItem>
                </Col> 
  </Row>



{/* 第七行 保险信息_*/}
<Row justify="start" style={{  marginTop:10,paddingLeft:20,background:"#F2F7FA" }}>
            <h2><font color="#2CB6C0">保险信息</font></h2>
  </Row>

  <Row style={{ marginTop: 10 }}>
          
      <Button 
      style={{background:'#37BFCB',color: 'white', marginBottom: 10 }} 
      icon="plus-circle-o"
      onClick={ this.handleAdd.bind(this) } 
      >
      新增
      </Button>

        <Table
            
                columns={columns}
                dataSource={null}
              />
  </Row>

  <Row style={{ marginTop: 20 }} >
        <Col span="24" style={{ textAlign: 'center' }}>
          <Button style={{ marginRight: 20 }} onClick={this.handleSave.bind(this)}>保存</Button>
          
          <Button type="primary"
          style={{ marginRight: 20 }}
          onClick={this.props.handleSaveSend}
          >
          保存并发卡(回车)</Button>

          <Button style={{ marginRight: 20 }} 
         
          
          >取消</Button>
        </Col>
  </Row>

      </Form>
    );//return
  }//render


}
