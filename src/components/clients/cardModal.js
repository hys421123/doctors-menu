import React, { Component } from 'react';
import {Tabs, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
import MedicalAppoint from './medicalAppoint'
import {  browserHistory} from 'dva/router';

const FormItem=Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;


export default class CardModal extends Component {
    constructor(props){
     super(props);

     this.state={
        loading: false,
     }
    }
 
    showConfirm=()=> {
        const that=this;
    
        confirm({
          title: '确认保存会员卡信息吗?',
        
          onOk() {
            console.log('要去发卡预约了');
            browserHistory.push({
                pathname:  '/cus_centers/medical_appoint',
                
              });
    
    
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      }

    handleSendCard = (e) => {
        console.log('发卡');
    
      }


    handleBack = (e) => {
        console.log('我们返回来啦');
        this.props.closeModal();
      }

      handleSendAppoint=(e)=>{
          this.showConfirm();

       
      }

  render() {
    return (
        <Modal
        title="发卡"
        visible={this.props.visible}
        onCancel={this.handleBack}
        footer={[           
            <Button key="sendCard"  onClick={this.handleSendCard.bind(this)}>发卡</Button>,
            <Button key="sendAppoint"   loading={this.state.loading}  onClick={this.handleSendAppoint.bind(this)}>
              发卡并预约
            </Button>,
            <Button  key="back"  onClick={this.handleBack.bind(this)}>
                返回
            </Button>
          ]}
        maskClosable={false}
        width={900}
      >
 
        <ModalContent />

      </Modal>
    );
  }
}//CardModal_cls


@Form.create()
class ModalContent extends Component {
    handleSubmit = (e) => {
        console.log('submit');
        
  
    }

    render(){

        const formItemLayout={
            labelCol: {
                span: 8,
              },
              wrapperCol: {
                span: 16,
              },
        };


        const { getFieldDecorator } = this.props.form;


        return(
            <Form onSubmit={this.handleSubmit}>

{/* 第一行 卡类型 */}
        <Row style={{  marginTop:20}} type="flex" justify="center" >
            <Col span="8">
		    	  	<FormItem label="卡类型：" {...formItemLayout}>
			            
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	  (   <Select placeholder="请选择卡类型">
                  <Option value="male">普通卡</Option>
                  <Option value="female">会员卡</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="客户等级：" {...formItemLayout}>
			           { 
                  getFieldDecorator('gender', {
                    rules: [{ required: true, message: '此項必填' }],
                     })
			        	  (      <Select placeholder="请选择客户等级">
                  <Option value="male">1级</Option>
                  <Option value="female">2级</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="卡号：" {...formItemLayout}>
			           { 
                  getFieldDecorator('age', { rules: [{ required: true, message: '此項必填' }],
                    })
			        	 
			        	  ( <Input  type="input" placeholder="请输入卡号" /> )
			           }  
			          </FormItem>
		    	  </Col>
        </Row>

{/* 第二行 是否充值卡 */}
        <Row type="flex" justify="center" >
            <Col span="8">
		    	  	<FormItem label="是否充值卡：" {...formItemLayout}>
			            
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '此項必填' }], })
			        	  (   <Select placeholder="请选择是否充值">
                  <Option value="male">是</Option>
                  <Option value="female">否</Option>
                </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="密码：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_pwd', {
                    
                     })
			        	  (      <Input  type="password" placeholder="请输入密码" />)
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="密码确认：" {...formItemLayout}>
			           { 
                  getFieldDecorator('confirm_pwd', {         })
			        	 
			        	  ( <Input  type="password" placeholder="请再次输入密码" /> )
			           }  
			          </FormItem>
		    	  </Col>
        </Row>


{/* 第三行 发卡原因 */}
        <Row type="flex" justify="center" >
            <Col span="8">
		    	  	<FormItem label="发卡原因：" {...formItemLayout}>
			            
                  {getFieldDecorator('card_reason', {
                     })
			        	  (  <Input  type="input" placeholder="请输入发卡原因" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="领卡人：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_receiver', {
                    
                     })
			        	  (      <Input  type="input" placeholder="请输入领卡人" />)
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="领卡部门：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_department', {         })
			        	 
			        	  ( <Input  type="input" placeholder="请输入领卡部门" /> )
			           }  
			          </FormItem>
		    	  </Col>
        </Row>


{/* 第三行 备注 */}
        <Row type="flex" justify="center" >
            <Col span="8">
		    	  	<FormItem label="备注：" {...formItemLayout}>
			            
                  {getFieldDecorator('card_notes', {
                     })
			        	  (  <Input  type="input" placeholder="请输入备注" /> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="发卡人：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_receiver', {rules: [{ required: true, message: '此項必填' }],
                    
                     })
			        	  (      <Input  type="input" placeholder="请输入发卡人" />)
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="发卡日期：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_date', { rules: [{ required: true, message: '此項必填' }],        })
			        	 
			        	  (  <DatePicker  placeholder="年/月/日" />)
			           }  
			          </FormItem>
		    	  </Col>
        </Row>


{/* 第四行 卡费 */}
        <Row type="flex" justify="center" >
            <Col span="8">
		    	  	<FormItem label="卡费：" {...formItemLayout}>
			            
                  {getFieldDecorator('card_cost', {
                     })
			        	  (   <Select placeholder="请选择卡费">
                                    <Option value="male">是</Option>
                                    <Option value="female">否</Option>
                            </Select> )
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="当前余额：" {...formItemLayout}>
			           { 
                  getFieldDecorator('current_balance', {rules: [{ required: true, message: '此項必填' }],
                    
                     })
			        	  (      <Input  type="input" placeholder="请输入当前余额" />)
			           }  
			          </FormItem>
		    	  </Col>
            <Col span="8">
		    	  	<FormItem label="卡有效期：" {...formItemLayout}>
			           { 
                  getFieldDecorator('card_validity', { rules: [{ required: true, message: '此項必填' }],        })
			        	 
			        	  (  <DatePicker  placeholder="年/月/日" />)
			           }  
			          </FormItem>
		    	  </Col>
        </Row>

{/* 最后一行 充值折扣         */}
        <Row type="flex" justify="start" >
            <Col span="8">
		    	  	<FormItem label="充值折扣：" {...formItemLayout}>
			            
                  {getFieldDecorator('recharge_discount', {
                     })
			        	  (   <Select placeholder="请选择充值折扣">
                                    <Option value="male">9折</Option>
                                    <Option value="female">8折</Option>
                            </Select> )
			           }  
			          </FormItem>
		    	  </Col>
        </Row>

            </Form>
        );//return
    }//render    

}//ModalContent