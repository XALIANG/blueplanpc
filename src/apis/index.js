import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Store from '@/store';
import router from '@/router';
import { message, notification } from 'ant-design-vue';
NProgress.configure({ showSpinner: false });
const token = Store.getters.userForm.token;
axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';

axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    token && (config.headers.Authorization = `bearer ${token}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use((response) => {
  NProgress.done();
  if (response.data.code === 404 || response.data.status === 404) {
    message.error(response.data.msg);
    return Promise.reject(response);
  } else if (response.data === 401) {
    message.warning('身份过期！请重新登录, 5秒后退出');
    setTimeout(() => {
      Store.commit('user/REMOVE_USER_INFO');
      router.push('/login');
    }, 5000);
  } else if (response.data === 404) {
    message.warning('身份过期！请重新登录, 5秒后退出');
  } else if (response.data.code === 200) {
    return response;
  }
  return response;
});

export function GET(url, param) {
  return new Promise((resovle, reject) => {
    axios
      .get(url, { params: param })
      .then((res) => {
        resovle(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function POST(url, param) {
  return new Promise((resovle, reject) => {
    axios
      .post(url, param)
      .then((res) => {
        resovle(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
