// 登陆
import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { POST_LOGIN } from "../../api";
import { useHistory } from 'react-router-dom'
import { setLocalstorage, delLocalStorage } from '../../tools/method';
import { useDispatch } from 'react-redux';

const CrmLogin = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'RESET_REDUX' })
    delLocalStorage('CRM_USERINFO')
  }, [])
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 4 },
  };
  const tailLayout = {
    wrapperCol: { offset: 2, span: 4 },
  };
  const onFinish = async (values: Store) => {
    const resData: any = await POST_LOGIN(values)
    if (resData.state === '200') {
      setLocalstorage('CRM_USERINFO', resData.data)
      history.replace('/home')
    }
  };
  return (
    <Form
      {...layout}
      name="basic"
      hideRequiredMark
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input type='password' />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CrmLogin