import { takeEvery, select, take, call, put } from '@redux-saga/core/effects';
import { GET_MONEY, GET_TOPLIST, setMoney, setTopList } from './action';
import { SET_MONEY, SET_TOPLIST } from "../../api";
//获取营业额
function* getMoney() {
  // const { userInfo } = yield select(state => state.homeNav)
  // console.log(userInfo);
  const resData = yield SET_MONEY({ type: '1', date: '' })
  yield put(setMoney(resData.data.money))
}
// 获取排行榜
function* getTopList() {
  const resData = yield SET_TOPLIST()
  yield put(setTopList(resData.data.list))
}
function* rootSaga() {
  yield takeEvery(GET_MONEY, getMoney)//获取金额
  yield takeEvery(GET_TOPLIST, getTopList)//获取排行榜
}
export default rootSaga