import axios from 'axios';

axios.defaults.timeout = 3000;



export function GET(url,param){
    return new Promise((resovle,reject)=>{
        axios.get(url,{params:param}).then(res=>{
            resovle(res.data);
        }).catch(err=>{
            reject(err);
        })
    });
}