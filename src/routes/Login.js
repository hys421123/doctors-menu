import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'

const FormItem = Form.Item

const Login = ({
  appmodel,
  dispatch,
  form:{
    getFieldDecorator,
    validateFieldsAndScroll,
  }
}) => {

  const {loginLoading} = appmodel;

  var uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png'

  function handleOk () {
    validateFieldsAndScroll((err,value)=>{
      if (err) {
        return
      }

      console.log('value',value);
      
      // $q.post($q.url + '/security/login',JSON.stringify(values), data => {


      // console.log('app_login');
      // let url="http://10.110.200.106/services/hys/contract/getById/179";
      // let url="http://10.110.200.106/services/security/login";
      // fetch(url,{
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body:JSON.stringify(value),
      // }).then(response => response.json())
      //                   .then(data => console.log('fetch_data',data))
      //                   .catch(e => console.log("Oops, error", e));

      dispatch({type:'appmodel/login',payload:value})
    })
  }

  return (
    <div style={styles.login}>
      <div style={styles.loginView}>
        <div style={styles.loginHead}>
          <img style={styles.loginImg} src={uri}></img>
          <span style={styles.loginText}>Dva Login Test</span>
        </div>
        <div style={styles.loginBody}>
          <form style={{width:'80%',}}>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    hasFeedback:true
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="请输入密码" />)}
            </FormItem>

              <Button style={styles.loginButton} type="primary" size="large" onClick={handleOk} loading={loginLoading}>
                登录
              </Button>

          </form>
        </div>

      </div>
    </div>
  )
}

// 类型检测
Login.propTypes = {
  form: PropTypes.object,
  app: PropTypes.object,
  dispatch: PropTypes.func,
}

const styles = {
  login:{
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  loginView:{
    width:320,height:320,
    boxShadow:'0 0 100px rgba(0,0,0,.08)',
  },
  loginHead:{
    width:320,
    height:'20%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  loginImg:{
    width:40,
    marginRight:8,
  },
  loginText:{
    fontSize:18
  },
  loginBody:{
    height:'80%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  loginButton:{
    width:'100%'
  }
}

export default connect(({ appmodel}) => ({ appmodel }))(Form.create()(Login))
