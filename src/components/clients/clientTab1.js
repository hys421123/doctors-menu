import React, { Component } from 'react';
import {Card, Breadcrumb,Row, Col, Spin, Button, Table, Form, Modal, DatePicker, Select, Popconfirm, message, Cascader, Input } from 'antd';

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

    // console.log('clientTab1_data ',this.props.data);
    const data=this.props.data;

    return (
      <div  >
     <Row style={{ marginTop: 10 }} type="flex" justify="end" >
            <Col >
              <Button  onClick={this.handleEdit.bind(this)}  >编辑</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.phoneVerify.bind(this)}>电话验证</Button>
              <Button style={{background:'#333333',color: 'white', marginLeft: 10 }}  onClick={this.insuranceVerify.bind(this)}>保险验证</Button>

            </Col>
    </Row>

{/* div里放主要内容 */}
    {/* <div style={{ marginTop: 20 }}  > */}
        <Card  bordered={false} style={{background:'#ECECEC' ,marginTop: 20}}>

          <div>  {/* 基本信息部分 */}
              <Row  justify="start" >
                  <Col>
                    <b>基本信息</b>
                    <hr />
                  </Col>

              </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="4">
                病人ID: 1000001
              </Col>
              <Col span="4">
                诊疗卡号: {data.card_id}
              </Col>

              <Col span="4">
                姓名:   {data.name}
              </Col>
              <Col span="4">
                性别: {data.gender}
              </Col>

              <Col span="4">
                出生日期: {data.birthdate}
              </Col>
              <Col span="4">
                移动电话: {data.phonenum}
              </Col>
              

          </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="4">
                证件类型: {data.certificate_type}
              </Col>
              <Col span="4">
                证件编号: {data.certificate_num}
              </Col>

              <Col span="4">
                出生地点: {data.birthplace}
              </Col>
              <Col span="4">
                国籍: {data.country}
              </Col>

              <Col span="4">
                民族: {data.nationality}
              </Col>
              <Col span="4">
                婚姻: {data.marriage}
              </Col>
          </Row>

          <Row style={{ marginTop: 10 }} justify="start"  type="flex" >
              <Col span="4">
                学历: {data.education}
              </Col>
              <Col span="4">
                病人来源: {data.patients_source}
              </Col>

              <Col span="4">
                客户等级: {data.patient_level}
              </Col>
              
      
          </Row>
          
           </div> {/* 以上是基本信息部分 */}

           <div>
           <Row style={{ marginTop: 25 }} justify="start" >
                  <Col>
                    <b>家庭信息</b>
                    <hr />
                  </Col>
            </Row>
            <Row style={{ marginTop: 10 }} justify="start"  type="flex" >
              <Col span="4">
                家庭地址: {data.address}
              </Col>
              <Col span="4">
                家庭电话: {data.phonenum}
              </Col>
          </Row>
          
         </div>     {/* 以上是家庭信息 */}

                   
   

            <div>   {/*这里是工作信息 */}
           <Row style={{ marginTop: 25 }} justify="start" >
                  <Col>
                    <b>工作信息</b>
                    <hr />
                  </Col>
            </Row>

            <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="4">
                职业: 销售
              </Col>
              <Col span="5">
                身份: 经理
              </Col>

              <Col span="5">
                工作单位: 益华酒店管理公司
              </Col>
              <Col span="5">
                单位电话: 025-88888888
              </Col>

              <Col span="5">
                电子邮件: {data.email}
              </Col>

          </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
          <Col span="4">
            移动电话: {data.phonenum}
          </Col>
          <Col span="5">
            联系人姓名 : {data.contact_name}
          </Col>

          <Col span="5">
            联系人地址: 江苏省南京市中山北路88号益华酒店
          </Col>
          <Col span="5">
            联系人电话: {data.contact_phone}
          </Col>

          <Col span="5">
            联系人关系: 上司
          </Col>

      </Row>
          
         </div>     {/* 以上是工作信息 */}


         <div>   {/*这里是其他信息 */}
           <Row style={{ marginTop: 25 }} justify="start" >
                  <Col>
                    <b>其他信息</b>
                    <hr />
                  </Col>
            </Row>

            <Row style={{ marginTop: 10 }} justify="start"  type="flex" >
              <Col span="4">
                医疗付款方式: 医保
              </Col>
              <Col span="5">
                婚姻: {data.marriage}
              </Col>
          </Row>
         </div>     {/* 以上是其他信息 */}





         <div>   {/*这里是保险信息 */}
           <Row style={{ marginTop: 25 }} justify="start" >
                  <Col>
                    <b>保险信息</b>
                    <hr />
                  </Col>
            </Row>

            <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
              <Col span="5">
                保险公司: 太平洋
              </Col>
              <Col span="5">
                保险类型: 商业保险
              </Col>

              <Col span="5">
                保险号: 12345678
              </Col>
              <Col span="5">
                保险效期: 2018-09-09
              </Col>

             

          </Row>

          <Row style={{ marginTop: 10 }} justify="center"  type="flex" >
          <Col span="5">
            保险公司: 平安
          </Col>
          <Col span="5">
            保险类型: 商业保险
          </Col>

          <Col span="5">
            保险号: 87654321
          </Col>
          <Col span="5">
            保险效期: 2018-09-09
          </Col>

         

      </Row>
          
         </div>     {/* 以上是保险信息 */}

        </Card>


   
      </div>
    );
  }
}
