import React, {useState, useEffect} from 'react'
import request from '../../config/request.js'
import { message } from 'antd';
import qs from 'qs'
import './index.css'

// eslint-disable-next-line no-restricted-globals
const query = qs.parse(location.search, { ignoreQueryPrefix: true })
export default function Index() {
  const [detail, setDetail] = useState([])
  useEffect(() =>{
    if(!query.id) {
      message.error('参数错误')
    }
  })  
  useEffect(() => {
    getData()
  },[])
  const getData = async () => {
    // 拿数据
   let data = await  request.get(`/red/alert/exception/msg?id=${query.id}`)
    setDetail(data?.data?.result)
  }
  return (
    <div className='details'>
        <div className='title item'>项目预警</div>
        <div className='item'>
          <div className='left'>项目</div>
          <div className='right'>dataline-boot</div>
        </div>
        <div className='item'>
          <div className='left'>exceptionClass</div>
          <div className='right color-red'>class java.io.IOException</div>
        </div>
        <div className='item'>
          <div className='left'>url</div>
          <div className='right'>/v1-6-2/trend/sale-trend</div>
        </div>
        <div className='item'>
          <div className='left'>exceptionMessage</div>
          <div className='right'>listener timeout after waiting for [30000] ms</div>
        </div>
        <div className='item'>
          <div className='left'>requestParam</div>
          <div className='right'>{`{"shopId":331821357,"distribution":3,"granularity":1,"sbType":"","startDate":"2020-02-04","endDate":"2021-02-03"}`}</div>
        </div>
        <div className='item'>
          <div className='left'>exceptionStack</div>
          <div className='right'>{`[{"className":"org.elasticsearch.client.RestClient$SyncResponseListener","fileName":"RestClient.java","lineNumber":899,"methodName":"get",
          "nativeMethod":false},{"className":"org.elasticsearch.client.RestClient","fileName":"RestClient.java","lineNumber":227,"methodName":"performRequest","nativeMethod":false},
          {"className":"org.elasticsearch.client.RestHighLevelClient","fileName":"RestHighLevelClient.java","lineNumber":1764,"methodName":"internalPerformRequest","nativeMethod":false},
          {"className":"org.elasticsearch.client.RestHighLevelClient","fileName":"RestHighLevelClient.java","lineNumber":1734,"methodName":"performRequest","nativeMethod":false},
          {"className":"org.elasticsearch.client.RestHighLevelClient","fileName":"RestHighLevelClient.java","lineNumber":1696,"methodName":"performRequestAndParseEntity","nativeMethod":false},
          {"className":"org.elasticsearch.client.RestHighLevelClient","fileName":"RestHighLevelClient.java","lineNumber":1092,"methodName":"search","nativeMethod":false},
          {"className":"com.zhiyi.config.ESConfigV2","fileName":"ESConfigV2.java","lineNumber":81,"methodName":"search","nativeMethod":false}]`}</div>
        </div>
        <div className='item'>
          <div className='left'>time</div>
          <div className='right'>2021-02-04 10:05:55</div>
        </div>
        <div className='item color-blue'>我知道了</div>
    </div>
  )
}