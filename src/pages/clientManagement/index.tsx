// 客户管理
import React, { Key, useState, useEffect } from 'react'
import { Col, Row, Tree, Space, Modal, Form, Input, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { DataNode } from 'antd/lib/tree';
const { TreeNode } = Tree;
// 数据
const dataTree = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
]

// 构建树形菜单
const ClientManagement = () => {
  const [form] = Form.useForm();
  const [treeData, setTreeData] = useState<DataNode[]>([])//数据
  const [curKey, setCurKey] = useState<Key[]>(['0-0'])//当前选择
  const [isEdiitMdal, setIsEdiitMdal] = useState(false)//编辑弹窗状态
  useEffect(() => {
    setTreeData(dataTree)
  }, [])
  // treeNode选择设置curKey
  const onSelect = (selectedKeys: Key[]) => {
    setCurKey(selectedKeys);
  }
  // 编辑弹窗切换
  const onEditSwitch = () => {
    setIsEdiitMdal(!isEdiitMdal)
    form.resetFields()//重置表单
  }
  // 提交
  const onEditSubmit = () => {
    form.validateFields().then((values) => {
      editTree(treeData, curKey, values.title)
      onEditSwitch()
    });
  }

  // 构建树形菜单
  const renderTree = (info: DataNode[]): React.ReactNode => {
    return info.map((item: DataNode) => {
      if (!item.children) {
        return (
          <TreeNode
            title={
              < Space >
                {item.title}
                {curKey[0] === item.key ? <EditOutlined onClick={() => onEditSwitch()} /> : null}
              </Space >
            }
            key={item.key}
          />
        )
      } else {
        return (
          <TreeNode
            title={
              <Space>
                {item.title}
                {curKey[0] === item.key ? <EditOutlined onClick={() => onEditSwitch()} /> : null}
              </Space>
            }
            key={item.key} >
            {renderTree(item.children)}
          </TreeNode>
        )
      }
    })
  }
  // 修改值更改
  const editTree = (info: DataNode[], key: Key[], value: string): any => {
    for (let index = 0; index < info.length; index++) {
      if (info[index].key === key[0]) {
        info[index].title = value
        message.success('修改成功')
        return false
      } else if (info[index].children) {
        editTree(info[index].children || [], key, value)
      }
    }
  }
  return (
    <Row gutter={[24, 16]} >
      <Col flex="200px">
        <Tree.DirectoryTree
          showIcon={false}
          selectedKeys={curKey}
          onSelect={onSelect}
          expandAction='doubleClick'
        >
          {renderTree(treeData)}
        </Tree.DirectoryTree>
        <Modal
          title="编辑title"
          destroyOnClose
          visible={isEdiitMdal}
          onOk={onEditSubmit}
          onCancel={onEditSwitch}
        >
          <Form
            form={form}
            name="editTtile"
          >
            <Form.Item
              label="新title"
              name="title"
              rules={[{ required: true, whitespace: true, message: '请输入新tltle!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </Col>
      <Col flex={1}>联系人</Col>
    </Row>
  )
}
export default ClientManagement