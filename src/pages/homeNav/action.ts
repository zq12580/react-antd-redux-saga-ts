import { NavList, UserInfo } from "../../../global"
const homeType = {
  SET_TABLIST: Symbol(),//设置tabList
  SET_TABKEY: Symbol(),//设置tabList
  SET_USER: Symbol(),//设置用户信息
  SET_TOKEN: Symbol(),//设置TOKEN
  SET_MONEY: Symbol(),//设置销售额
  SET_TOPLIST: Symbol(),//设置排行榜
  GET_MONEY: Symbol(),//获取销售额
  GET_TOPLIST: Symbol(),//获取排行榜
}
const homeAction = {
  setTabList: (params: NavList[]) => ({
    type: SET_TABLIST,
    payload: params
  }),
  setTabKey: (params: string) => ({
    type: SET_TABKEY,
    payload: params
  }),
  setUser: (params: UserInfo) => ({
    type: SET_USER,
    payload: params
  }),
  setToken: (params: string) => ({
    type: SET_TOKEN,
    payload: params
  }),
  getMoney: () => ({
    type: GET_MONEY
  }),
  setMoney: (params: string) => ({
    type: SET_MONEY,
    payload: params
  }),
  setTopList: (params: string) => ({
    type: SET_TOPLIST,
    payload: params
  }),
  getTopList: () => ({
    type: GET_TOPLIST,
  }),
}
export const { SET_TABLIST, SET_TABKEY, SET_USER, SET_TOKEN, GET_MONEY, SET_MONEY, SET_TOPLIST, GET_TOPLIST } = homeType
export const { setTabList, setTabKey, setUser, setToken, getMoney, setMoney, setTopList, getTopList } = homeAction