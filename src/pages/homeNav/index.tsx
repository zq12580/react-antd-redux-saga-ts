// home导航页面
import React, { useEffect } from 'react'
import { Card, Col, Row, Statistic, Tabs, Typography, Avatar, message, Button } from 'antd';
import { navList } from "../../tools/navList";
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { NavList } from '../../../global';
import { useSelector, useDispatch } from 'react-redux';
import { setTabList, setTabKey, setUser, setToken, getMoney, getTopList } from "./action";
import { getLocalstorage } from '../../tools/method';

const HomeNav = () => {
  const history = useHistory()
  const { tabList, userInfo, money, topList } = useSelector((state: any) => state.homeNav)
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = getLocalstorage('CRM_USERINFO')
    if (userInfo) {
      dispatch(setUser(userInfo))//设置用户信息
      dispatch(setToken(userInfo.token))//设置token
      dispatch(getMoney())
      dispatch(getTopList())
    } else {
      message.warning('登陆异常,请重新登陆!')
      history.replace('/login')
    }
  }, [])
  // 跳转
  const onSkip = (params: NavList) => {
    history.replace({
      pathname: params.path,
      state: { key: params.key }
    })
    const ishave = tabList.some((item: NavList) => item.key === params.key)
    if (!ishave) {
      dispatch(setTabList([...tabList, params]))
    }
    dispatch(setTabKey(params.key))
  }
  return (
    <div>
      <Row gutter={[24, 16]}>
        <Col span={12} >
          <Card>
            <Card.Meta
              avatar={<Avatar src={userInfo.img} size='large' alt="头像" />}
              title={`${userInfo.name}，祝你开心每一天！`}
              description={`${userInfo.corporation}/${userInfo.department}`}
            />
          </Card>
        </Col>
        <Col span={4}>
          <Statistic
            title="90天商机"
            value={20}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="销售额"
            value={money}
            precision={2}
            suffix="万"
          />
          <Button size='small' onClick={() => dispatch(getMoney())}>切换</Button>
        </Col>
        <Col span={4}>
          <Statistic
            title="客户数"
            value={9999}
          />
        </Col>
        <Col span={18}>
          <Row >
            <Typography.Title level={2}>菜单</Typography.Title>
          </Row>
          <Row gutter={[24, 16]}>
            {
              navList.map(item => (
                <Col span={6} key={item.key}>
                  <a onClick={() => onSkip(item)} style={{ display: 'block' }}>
                    <Avatar shape="square" size='large' icon={<UserOutlined />} />
                    {item.title}
                  </a>
                </Col>
              ))
            }
          </Row>
        </Col>
        <Col span={6}>
          <Card title="集团排行榜" bordered={false}>
            <Tabs defaultActiveKey="1" size='small' onChange={() => dispatch(getTopList())}>
              <Tabs.TabPane tab="商机" key="1">
                {topList.map((item: string, key: number) =>
                  <Typography.Paragraph ellipsis key={key}>{item}</Typography.Paragraph>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="客户数" key="2">
                {topList.map((item: string, key: number) =>
                  <Typography.Paragraph ellipsis key={key}>{item}</Typography.Paragraph>
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="合同额" key="3">
                {topList.map((item: string, key: number) =>
                  <Typography.Paragraph ellipsis key={key}>{item}</Typography.Paragraph>
                )}
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row >
    </div >
  )
}
export default HomeNav