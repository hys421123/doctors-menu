'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中
let tableListData = {};

if (!global.tableListData) {
  const data = mockjs.mock({
    'data|100': [{
      'id':'@INCREMENT(1)', //序号
      
      'register_date': '@NOW(yy-MM-dd HH:mm:ss)',  //随机登记时间
      'card_type':'诊疗卡',
   
      'card_id':()=>{
        return Random.increment(1)+1000; 
      },
      'card_state':()=>{// 就诊卡状态
        Random.extend({
          cardstates: ['有效卡', '补卡停用', '退卡停用', '挂失停用'],
          cardstate: function(date){
              return this.pick(this.cardstates)
          }
      });
      return Random.cardstate();


      },
      'card_distributor':'@CNAME', //发卡人
      'card_date':'@NOW(yy-MM-dd HH:mm:ss)',
      'name':'@CNAME',
      'gender':()=>{//性别
        Random.extend({
          arrays: ['男', '女'],
          array: function(date){
              return this.pick(this.arrays)
          }
      });
      return Random.array();
      },
      'age':'@INTEGER(0,100)',
      'idcard_num':'@ID',
      'phonenum': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
      'email': () => {
        return Random.email('visiondk.com');
      },
      'address':'@REGION',

      'avatar': () => {
        return Random.image('125x125');
      },


    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}

module.exports = {
  //post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
  'GET /users' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    let newData = tableListData.data.concat();

    //数据开始模拟
    if (page.field) {
      const d = newData.filter((item) => {
        return item[page.filed].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length,
      };
    } else {
      data = tableListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      tableListData.page.current = currentPage * 1;

      newPage = {
        current: tableListData.page.current,
        total: tableListData.page.total,
      }
    }//else

    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        data,
        page: '123',
      });
    }, 200);//setTimeout
    
  },
}