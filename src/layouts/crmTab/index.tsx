// 页签
import React from 'react'
import { Tabs } from 'antd';
import { HomeOutlined, CloseCircleOutlined } from '@ant-design/icons';
import HomeNav from "../../pages/homeNav";
import { NavList } from '../../../global';
import { useSelector, useDispatch } from 'react-redux';
import { setTabKey, setTabList } from "../../pages/homeNav/action";

const CrmTab: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { tabList, tabKey } = useSelector((state: any) => state.homeNav)
  // tab切换
  const onChange = (key: string) => {
    dispatch(setTabKey(key))
  }
  // tab编辑
  const onEdit = (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      const newTabList = tabList.filter((item: NavList) => item.key !== e)
      dispatch(setTabList(newTabList))
    }
  }
  // 移除全部
  const onDel = () => {
    dispatch(setTabList([]))
    dispatch(setTabKey('home'))
  }
  return (
    <Tabs
      type="editable-card"
      hideAdd={true}
      tabBarGutter={0}
      activeKey={tabKey}
      onChange={onChange}
      onEdit={onEdit}
      // tabPosition='right'
      tabBarExtraContent={tabList.length > 0 ? <CloseCircleOutlined onClick={onDel} style={{ padding: '8px 15px' }} /> : false}
    >
      <Tabs.TabPane
        key="home"
        closable={false}
        tab={<HomeOutlined style={{ margin: 0, fontSize: 22 }} />}
        style={{ padding: 10 }}
      >
        <HomeNav />
      </Tabs.TabPane>
      {
        tabList.map(
          (item: any) =>
            <Tabs.TabPane
              key={item.key}
              closable={!(item.key === tabKey)}
              tab={item.title}
              style={{ padding: 10 }}
            >
              <item.component />
            </Tabs.TabPane>
        )
      }

    </Tabs>
  )
}

export default CrmTab
CrmTab.defaultProps = {

}
interface Props {

}