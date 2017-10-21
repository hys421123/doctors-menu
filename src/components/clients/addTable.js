
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Row, DatePicker, Button, Table, Input, Popconfirm } from 'antd';

// 代码预警， 在renderColumns中的return语句中去掉了 status的传递
class EditableCell extends React.Component {
  state = {
    key: this.props.key,
    index: this.props.index,
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
    // console.log('willReceive');


    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }
    if (nextProps.status && nextProps.status !== this.props.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.editable !== this.state.editable ||
      nextState.value !== this.state.value;
  }
  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);

    this.setState({ value });
  }
  render() {
    const { key, value, editable } = this.state;

    let value1 = 'undefined';

    if (value !== undefined) {

      value1 = value;
    }

    // if(key=='insurance_validity'){
    //     console.log('key',key);
    // }

    // key=='insurance_validity' ?
    // <div>  <DatePicker
    //     placeholder="年/月/日"
    //     />
    // </div>
    // :

    return (
      <div>


        {
          editable ?

            <div>
              <Input

                value={value}
                onChange={e => this.handleChange(e)}
              />
            </div>

            :
            <div className="editable-row-text">
              {

                value1.toString() || ' '}
            </div>

        }
      </div>
    );
  }
}//EditableCell_cls

class AddTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        render: (t, r, i) => (i + 1),
        className: 'center',
        width: '10%',
      },

      {
        title: '保险公司',
        className: 'center',
        dataIndex: 'insurance_company',
        render: (text, record, index) => this.renderColumns(this.state.dataSource, index, 'insurance_company', text),
        width: '20%',
      }, {
        title: '保险类型',
        className: 'center',
        dataIndex: 'insurance_type',
        width: '15%',
        render: (text, record, index) => this.renderColumns(this.state.dataSource, index, 'insurance_type', text),
      }, {
        title: '保险号',
        className: 'center',
        dataIndex: 'insurance_num',
        width: '15%',
        render: (text, record, index) => this.renderColumns(this.state.dataSource, index, 'insurance_num', text),
      }, {
        title: '保险效期',
        className: 'center',
        dataIndex: 'insurance_validity',
        width: '20%',
        render: (text, record, index) => this.renderColumns(this.state.dataSource, index, 'insurance_validity', text),
      }, {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record, index) => {
          const { editable } = this.state.dataSource[index].insurance_company;
          return (
            <div className="editable-row-operations">
              {
                editable ?
                  <span>
                    <a onClick={() => this.editDone(index, 'save')}>Save</a>&nbsp;&nbsp;
                        <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                      <a>Cancel</a>
                    </Popconfirm>&nbsp;&nbsp;


                      </span>
                  :
                  <span>
                    <a onClick={() => this.edit(index)}>Edit</a> &nbsp;&nbsp;


                  </span>

              }
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                <a href="#">Delete</a>
              </Popconfirm>
            </div>
          );
        },
      }

    ];
    this.state = {
      dataSource: [{
        key: 0,

        insurance_company: {
          editable: false,
          value: '平安保险公司',
        },
        insurance_type: {
          editable: false,
          value: '人身险',
        },
        insurance_num: {
          editable: false,
          value: '10021',
        },
        insurance_validity: {
          editable: false,
          value: '2009-10-11',
        },
      }],
      count: 1,
    };


  }//constructor


  // 删除按钮
  onDelete = (index) => {
    // console.log('delete');

    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }

  // 添加按钮
  handleAdd = () => {
    // console.log("add");

    const { count, dataSource } = this.state;
    const newData = {
      key: count,


      insurance_company: {
        editable: true,
        value: '',
      },
      insurance_type: {
        editable: true,
        value: '',
      },
      insurance_num: {
        editable: true,
        value: '',
      },
      insurance_validity: {
        editable: true,
        value: '',
      },
    };

    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  // 每列显示---------------------
  renderColumns(dataSource, index, key, text) {

    //   console.warn('renderCol_text ',text);

    const { editable, status } = dataSource[index][key];

    // console.log('dataSource,index,key,status',dataSource+"/"+index+"/"+key+"/"+status);

    if (typeof editable === undefined) {
      console.log('editable undefined');
      return text;
    }
    let value3=0;
    //  此处value  中应为单纯的 text-----------------
    return (<EditableCell
      editable={editable}
      value={text}
      key={key}
      index={index}
      onChange={this.handleChange(key, index)}

    />);
  }
  handleChange(key, index) {
    return (value) => {
      // console.warn('value in AddTable',value);
      const dataSource = [...this.state.dataSource];
      dataSource[index][key].value = value;
      this.setState({ dataSource });
    };
    
  }
  edit(index) {
    const { dataSource } = this.state;
    Object.keys(dataSource[index]).forEach((item) => {
      if (dataSource[index][item] && typeof dataSource[index][item].editable !== 'undefined') {
        dataSource[index][item].editable = true;
      }
    });
    this.setState({ dataSource });
  }

  // cancel,save 按钮响应----------------------------------------------
  editDone(index, type) {
    // 在 renderCol之后响应的

    const { dataSource } = this.state;


    Object.keys(dataSource[index]).forEach((item) => {
      if (dataSource[index][item] && typeof dataSource[index][item].editable !== 'undefined') {
        dataSource[index][item].editable = false;
        dataSource[index][item].status = type;
      }
    });
    this.setState({ dataSource }, () => {
      Object.keys(dataSource[index]).forEach((item) => {
        if (dataSource[index][item] && typeof dataSource[index][item].editable !== 'undefined') {
          delete dataSource[index][item].status;
        }
      });
    });
  }//editDone

  handleSubmit=()=>{
    console.log('table submit_data_ ',this.state.dataSource);
    
  }

  render() {
    const { dataSource } = this.state;
    const dataSource2 = dataSource.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;



    return (
      <div >

    <Row type="flex" justify="start">
        <Button
          style={{ background: '#37BFCB', color: 'white', marginBottom: 10 }}
          icon="plus-circle-o"
          onClick={this.handleAdd.bind(this)}
        >
          新增
      </Button>

      <Button
          style={{ background: '#37BFCB', color: 'white', marginLeft:10,marginBottom: 10 }}
          icon="check-circle-o"
          onClick={this.handleSubmit.bind(this)}
        >
         提交
      </Button>
   </Row>

        <Table
          bordered
          dataSource={dataSource2}
          columns={columns}
          rowKey="uid" />
      </div>

    );//return
  }
}// AddTable_cls





export default AddTable;