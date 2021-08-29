import axios from 'axios';

axios.defaults.timeout = 3000;
axios.defaults.baseURL = "http://localhost:9999/conviction";
axios.defaults.headers.post['Content-Type'] = 'application/json;x-www-form-urlencoded;charset=UTF-8;multipart/form-data';



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