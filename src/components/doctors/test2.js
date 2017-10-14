import React, { Component } from 'react';

export default class Path extends Component {

constructor(props){
 super(props);


//  fetch('GET/users',{                       // 发送请求
//   method:'GET',                            //请求方式    (可以自己添加header的参数)    
//   mode:'cors',// 避免cors攻击
//   credentials: 'include'                
// }).then(function(response) {
//   //打印返回的json数据
//   response.json().then(function(data){      //将response进行json格式化
//     console.log(data);                        //打印
//   }); 
// }).catch(function(e) {
//   console.log("Oops, error");
// });



fetch('/users',{                       // 发送请求
  method:'GET',                            //请求方式    (可以自己添加header的参数)    
  mode:'cors',// 避免cors攻击
  credentials: 'include'                
}).then(function(response) {
  //打印返回的json数据
  response.json().then(function(data){      //将response进行json格式化
    console.log(data);                        //打印
  }); 
}).catch(function(e) {
  console.log("Oops, error");
});


}

  render() {
    return (
      <div>
       test223333
      </div>
    );
  }
}
