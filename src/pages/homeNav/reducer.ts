import { SET_TABLIST, SET_TABKEY, SET_USER, SET_TOKEN, SET_MONEY, SET_TOPLIST } from "./action";
import { AnyAction } from "redux";

const defaultState = {
  tabList: [],//页签列表
  tabKey: 'home',//页签key
  userInfo: {},//用户信息
  token: '',//token
  money: '',//销售额
  topList: [],//排行榜
}
export default function reducer(state = defaultState, action: AnyAction) {
  const { type, payload } = action
  switch (type) {
    case SET_TABLIST:
      return { ...state, ...{ tabList: payload } }
    case SET_TABKEY:
      return { ...state, ...{ tabKey: payload } }
    case SET_USER:
      return { ...state, ...{ userInfo: payload } }
    case SET_TOKEN:
      return { ...state, ...{ token: payload } }
    case SET_MONEY:
      return { ...state, ...{ money: payload } }
    case SET_TOPLIST:
      return { ...state, ...{ topList: payload } }
    default:
      return state;
  }
}