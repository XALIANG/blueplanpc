import axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Store from '@/store';
import { message, notification } from 'ant-design-vue';
NProgress.configure({ showSpinner: false });

axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';
const token = Store.state.user.userForm.token;
axios.interceptors.request.use(config => {
    NProgress.start()
    token && (config.headers.Authorization = `bearer ${token}`);
    return config;

}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    NProgress.done()
    if (response.data.status === 404) {
        message.error(response.data.msg);
        return Promise.reject(response)
    } else if (response.data.status === 200) {
        return response;
    }
})



export function GET(url, param) {
    return new Promise((resovle, reject) => {
        axios.get(url, { params: param }).then(res => {
            resovle(res.data);
        }).catch(err => {
            reject(err);
        })
    });
}

export function POST(url, param) {
    return new Promise((resovle, reject) => {
        axios.post(url, param).then(res => {
            resovle(res.data);
        }).catch(err => {
            reject(err);
        })
    });
}