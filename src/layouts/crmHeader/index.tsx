// 布局
import React from 'react'
import { Menu, Dropdown, Modal, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ClickParam } from 'antd/lib/menu';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CrmHeader = () => {
  const { userInfo } = useSelector((state: any) => state.homeNav)
  const history = useHistory()
  // 切换菜单
  const handleMenuClick = (param: ClickParam) => {
    if (param.key === 'exit') {
      Modal.confirm({
        title: '是否确认退出?',
        icon: <ExclamationCircleOutlined />,
        onOk() {
          message.success('退出成功')
          history.replace('./login')
        },
      });
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0">主题切换</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="exit">退出</Menu.Item>
    </Menu>
  );
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>XH-CRM</div>
      <Dropdown overlay={menu} >
        <div>{userInfo.name} <DownOutlined /></div>
      </Dropdown>
    </div>
  )
}
export default CrmHeader