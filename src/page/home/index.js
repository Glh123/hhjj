import React, {useState, useEffect} from 'react'
// import request from 'axios'
import { Checkbox, Menu, Dropdown, Button, message } from 'antd';
import './index.css'
import 'antd/dist/antd.css'
import { DownOutlined } from '@ant-design/icons';

// const BaseUrl = '192.168.1.90'
const CheckboxGroup = Checkbox.Group;
const dateList = [
  {content: '15分钟', index: 1},
  {content: '30分钟', index: 2},
  {content: '1小时', index: 3},
  {content: '3小时', index: 4},
  {content: '6小时', index: 5}
]
const Detail = () => {
  return (
    <div className='detail'>
      <div className='title'>项目预警</div>
      <div className='project'>
        <div className='name item'>
          <span>项目名称 </span><span>dataline-boot</span>
        </div>
        <div className='type item'>
          <span>异常类型 </span><span className='color-red'>class java.io.IOException</span>
        </div>
        <div className='request-url item'>
          <div className='left'>请求地址 </div><div className='right'>{'{“shopId”:12535448,“distribution”:3,“granularity ”:3,“sbType ”:“, ”“startDate”:“2020-01-31 ”,“endDate”:“2020-01-30 ”}'}</div>
        </div>
        <div className='num item'>
          <span>短时间内改异常出现的次数 </span><span>11</span>
        </div>
        <div className='date'>
          <span>预警时间 </span><span>2021-02-03  11:39</span>
        </div>
      </div>
    </div>
  )
}
const Operate = () => {
  const plainOptions = ['请求地址', '异常类型', '项目名称']
  const menu = (
    <Menu onClick={handleMenuClick}>
      {
        dateList.map(item => (
          <Menu.Item key={item.index}>{item.content}</Menu.Item>
        ))
      }
    </Menu>
  );
  const [checkedList, setCheckedList] = useState([])
  const [selectDate, setSelectData] = useState('生效时间')
  const onChange = list => {
    setCheckedList(list);
  }
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    setSelectData(dateList.find(item => item.index === Number(e.key)).content)
  }
  
  return (
    <div className='operate'>
      <div className='tip'>与该条消息以下内容相同的预警信息在短时间内不再提醒</div>
      <div className='content'>
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        <div className='bottom'>
          <Dropdown overlay={menu} trigger='click'>
            <Button>
              {selectDate} <DownOutlined />
            </Button>
          </Dropdown>
          <div style={{ height: 10, flex: 1}}></div>
          <Button> 保存 </Button>
        </div>
      </div>
    </div>
  )
}
export default function Index() {
  // let params = {

  // }
  const [data] = useState([])
  useEffect(() =>{
    getData()
  })
  const getData = () => {
    // 拿数据
    // request.post(BaseUrl, params)
  }
  return (
    <div className='all'>
      <Detail value={data} />
      <Operate />
    </div>
  )
}
