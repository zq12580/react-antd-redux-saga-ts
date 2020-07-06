import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';
import zhCN from 'antd/es/locale/zh_CN';
import CrmLayout from "./layouts/crmLayout";
import CrmLogin from "./layouts/crmLogin";
import "./assets/styles/variables.less";
function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN} >
        <Router>
          <Switch>
            <Route exact path="/login" component={CrmLogin}></Route>
            <Route path="/*" component={CrmLayout}></Route>
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
