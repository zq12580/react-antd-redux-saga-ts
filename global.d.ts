/**
 * 类型定义
 */

// 导航列表
export interface NavList {
  key: string;//唯一key
  title: string;//文本
  path: string;//路径
  component: React.ReactNode//组件
}
// 用户信息
export interface UserInfo {
  id: string;//用户id
  name: string;//用户姓名
  img: string;//头像
  corporation: string;//公司
  department: string;//部门
  token: string;//token
}

