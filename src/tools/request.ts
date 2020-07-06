import Axios from 'axios';
import { notification } from 'antd';
import store from './../redux/store';
let axiosinster = Axios.create();


// GET请求
const get = (params: Options) => {
  const OPTIONS: Options = { ...{ method: 'GET' }, ...params }
  return axiosinster.request(OPTIONS);
}

// POST请求
const post = (params: Options) => {
  const OPTIONS: Options = { ...{ method: 'POST' }, ...params }
  return axiosinster.request(OPTIONS);
};

// 请求拦截
axiosinster.interceptors.request.use(
  config => {
    // 设置token
    config.headers.Authorization = store.getState().homeNav.token;
    return config;
  },
  error => {
    // 请求出错
    return Promise.reject(error);
  }
);

//  响应拦截
axiosinster.interceptors.response.use(
  response => {
    // token过期
    // if (response.data.data.money) {
    //   window.location.href = '/login'
    //   return
    // }
    return response.data;
  },
  error => {
    // 响应出错
    notification.error({
      message: `${error}`,
      placement: 'bottomLeft',
    });
  }
);

export default { GET: get, POST: post };

interface Options {
  url: string;//路径
  params?: any;//请求参数
  method?: 'GET' | 'POST';//请求方式
  contentType?: string;//Post请求的两种编码格式
}