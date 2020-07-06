import request from "../tools/request";
const { GET, POST } = request

// 登陆
export const POST_LOGIN = (params: any) =>
  POST({ url: 'http://192.168.1.125:3000/mock/50/crm/user' })
//获取金额
export const SET_MONEY = (params: any) =>
  GET({ url: 'http://192.168.1.125:3000/mock/50/crm/getSaleroom' })
//排行榜
export const SET_TOPLIST = () =>
  GET({ url: 'http://192.168.1.125:3000/mock/50/crm/topList' })

