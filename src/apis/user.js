import { POST, GET } from './index';
import qs from 'qs';


export const userRegister = params => POST('/user/blue/register', qs.stringify(params)).then(res => res);

export const userLogin = params => POST('/user/blue/login', qs.stringify(params)).then(res => res);

export const userList = params => GET('/user/public/list', params).then(res => res);


