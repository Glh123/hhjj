import { useEffect, useState } from 'react'
import { getBanList } from './service'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '推送机器人',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '规则',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '设定时间',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '结束时间',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function List () {
  const [dataSource, setDataSource] = useState([])
  console.log('get', getBanList)
  useEffect(() => {
    getBanList().then(res => {

    })
  }, [])
  return (
    <Table columns={columns} dataSource={data} />
  )
}