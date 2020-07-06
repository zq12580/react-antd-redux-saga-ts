import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from "./sagas";

// 创建中间件
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()


const enhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware);
export default createStore(reducer(history), enhancer);

// 监听rootsagas文件
sagaMiddleware.run(sagas);