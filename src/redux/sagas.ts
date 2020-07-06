import { all } from 'redux-saga/effects';
import homeSage from "../pages/homeNav/saga";


// 装载各个 sagas
export default function* () {
  yield all([
    homeSage()
  ])
}