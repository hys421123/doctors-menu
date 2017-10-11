import React, { Component } from 'react';
import { Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';
const Option = Select.Option;



export default class Content1 extends Component {
  render() {
    return (
      <div>
       我是客户信息管理内容1
      </div>
    );
  }
}

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
    

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row type="flex" justify="start" style={{marginTop:10}}>
          <Col span="4">
            <FormItem
              {...formItemLayout}
              label="合同名称"
            >
              {getFieldDecorator('contractname_LK')(
                <Input placeholder="请输入合同名称" />
              )}
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem
              label="合同编号"
              {...formItemLayout}
            >
              {getFieldDecorator('contractnum_LK')(
				        <Input placeholder="请输入合同编号" />
              )}
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem
              label="审核状态"
              {...formItemLayout}
            >
              {getFieldDecorator('status_EQ')(
                <Select placeholder="请输入审核状态">
                  {
                    this.props.lookup.status.map(v => <Option key={v.code} value={v.code}>{v.desp}</Option>)
                  }
                </Select>
              )}
            </FormItem>
          </Col>

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
