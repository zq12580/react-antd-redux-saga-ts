import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeNav from "../pages/homeNav/reducer";

const createRootReducer = (history: any) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    homeNav: homeNav,
  });
  const rootReducer = (state: any, action: any) => {
    // 重置redux
    if (action.type === 'RESET_REDUX') {
      state = undefined;
    }
    return appReducer(state, action);
  };
  return rootReducer;
}


export default createRootReducer;