import React, {useState, useEffect} from 'react'
import request from '../../config/request.js'
import { message } from 'antd';
import qs from 'qs'
import './index.css'

const data =  ['projectName', 'exceptionClass', 'url', 'exceptionMessage', 'requestParam', 'exceptionStack', 'userInfo', 'time']
// eslint-disable-next-line no-restricted-globals
const query = qs.parse(location.search, { ignoreQueryPrefix: true })
export default function Index() {
  const [detail, setDetail] = useState([])
  useEffect(() =>{
    const getData = async () => {
      // 拿数据
     let data = await  request.get(`/red/alert/exception/msg?id=${query.id}`)
    //  data?.forEach(item => {
    //    if(item === 'userInfo') {
    //      detail.userInfo = {
    //       user_id: data.user_id,
    //       user_name: data.user_name,
    //       team_id: data.team_id,
    //       team_name: data.team_name
    //      }
    //    }else {
    //     detail[item] = data[item]
    //    }
    //  })
      setDetail(data?.data?.result)
    }
    if(!query.id) {
      message.error('参数错误')
    }
    getData()
  }, [])  
  
  return (
    <div className='details'>
        <div className='title item'>项目预警</div>
        {data.map((item, index) => {
          return(
            <div className='item' key={index}>
              <div className='left'>{item}</div>
              <div className='right'>
                {item === 'userInfo' ? <> 
                  <div>user_id：{detail.userId}</div>
                  <div>user_name：{detail.userName}</div>
                  <div>team_id：{detail.teamId}</div>
                  <div>team_name：{detail.teamName}</div>
                </> : detail[item]}
              </div>
            </div>
          ) 
        })}
        <div className='item'>
          <div className='left'>一分钟内异常出现次数</div>
          <div className='right'>{detail.exceptionCount}</div>
        </div>
        <div className='item'>
          <div className='left'>扩展信息</div>
          <div className='right'>{detail.extInfo || 'null'}</div>
        </div>
        <div className='item color-blue'>我知道了</div>
    </div>
  )
}