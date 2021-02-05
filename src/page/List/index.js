import { useEffect, useState } from 'react'
import { getBanList, deleteItem } from './service'
import { Table, message } from 'antd';

export default function List () {
  const [dataSource, setDataSource] = useState([])

  const deleteBan = (key) => {
    deleteItem(key).then(res => {
      message.success('删除成功')
      getBanList().then(res => {
        res.data.result.map((item, index) => {
          item.index = index + 1
          item.rules = [{ name: '项目名称', value: item.projectName }, { name: '异常类型', value: item.exceptionClass }, { name: '请求地址', value: item.url }]
        })
        setDataSource(res.data.result)
      })
    })
  }

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: '规则',
      dataIndex: 'rules',
      key: 'rules',
      render: rules => (
        <>
          {
            rules.map((rule, index) => (
              <div key={index}>{rule.name}：{rule.value}</div>
            ))
          }
        </>
      )
    },
    {
      title: '设定时间',
      key: 'startTime',
      dataIndex: 'startTime'
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime'
    },
    {
      title: '操作',
      key: 'key',
      dataIndex: 'key',
      render: (key) => (
        <span onClick={() => deleteBan(key)} style={{ color: 'red', cursor: 'pointer' }}>删除</span>
      )
    }
  ];

  useEffect(() => {
    getBanList().then(res => {
      res.data.result.map((item, index) => {
        item.index = index + 1
        item.rules = [{ name: '项目名称', value: item.projectName }, { name: '异常类型', value: item.exceptionClass }, { name: '请求地址', value: item.url }]
      })
      setDataSource(res.data.result)
    })
  }, [])

  return (
    <Table style={{ marginTop: '80px' }} columns={columns} dataSource={dataSource} />
  )
}