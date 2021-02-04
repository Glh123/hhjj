import React, {useState, useEffect} from 'react'
import request from '../../config/request.js'
import { Checkbox, Menu, Dropdown, Button, message } from 'antd';
import './index.css'
import 'antd/dist/antd.css'
import qs from 'qs'
import { DownOutlined } from '@ant-design/icons';

const CheckboxGroup = Checkbox.Group;
const dateList = [
  { content: '15分钟', index: 1 },
  { content: '30分钟', index: 2 },
  { content: '1小时', index: 3 },
  { content: '3小时', index: 4 },
  { content: '6小时', index: 5 }
]
// eslint-disable-next-line no-restricted-globals
const query = qs.parse(location.search, { ignoreQueryPrefix: true })
const Detail = ({value}) => {
  return (
    <div className='detail'>
      <div className='title'>项目预警</div>
      <div className='project'>
        <div className='name item'>
          <span>项目名称 </span><span>{value?.projectName}</span>
        </div>
        <div className='type item'>
          <span>异常类型 </span><span className='color-red'>{value?.exceptionClass}</span>
        </div>
        <div className='request-url item'>
          <div className='left'>请求地址 </div><div className='right'>{value?.requestParam}</div>
        </div>
        <div className='num item'>
          <span>短时间内改异常出现的次数 </span><span>{value?.exceptionCount}</span>
        </div>
        <div className='date'>
          <span>预警时间 </span><span>{value?.exceptionTime}</span>
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
  const save = async () => {
    const params = {
      id: query.id,
      isProjectName: checkedList.includes('项目名称') ? 1 : 0,
      isUrl: checkedList.includes('请求地址') ? 1 : 0,
      isExceptionClass: checkedList.includes('异常类型') ? 1 : 0,
      minutes: selectDate === '生效时间' ? '' : selectDate.indexOf('分') > -1 ? selectDate.slice(0,2) : Number(selectDate.slice(0, 1)) * 60
    }
    const data = await request.post('/red/alert/nomore-notify', params)
    console.log(data)
    if(data.success) {
      message.success('修改成功')
    }
  }
  function handleMenuClick(e) {
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
          <Button onClick={save}> 保存 </Button>
        </div>
      </div>
    </div>
  )
}
  
const Header = () => {
  return (
    <div className='header'>
      知衣预警推送系统
    </div>
  )
}

export default function Index () {
  const [detail, setDetail] = useState([])
  useEffect(() =>{
    if(!query.id) {
      message.error('参数错误')
    }
  }
  )  
  useEffect(() => {
    getData()
  },[])
  const getData = async () => {
    // 拿数据
   let data = await  request.get(`/red/alert/exception/msg?id=${query.id}`)
    setDetail(data?.data?.result)
  }
  return (
    <div className='all'>
      <Header />
      <Detail value={detail} />
      <Operate />
    </div>
  )
}
