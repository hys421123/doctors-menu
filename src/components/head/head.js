import React, { Component } from 'react';
import styles from './style.less';

import { Icon, Popconfirm } from 'antd';
class Head extends Component {

  componentWillMount() {

  }

  logout = () => {

  }
  render() {
    return (
      <div className={styles.root}>
        
        <div className={styles.logo}>
          <span className={styles.logoname}>新虹桥名医工作室后台管理系统</span>
        </div>
        
        
      
   
      </div>
    );
  }
}

export default Head;
