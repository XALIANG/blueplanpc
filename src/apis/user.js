import { POST, GET } from './index';
import qs from 'qs';


export const userRegister = params => POST('/user/blue/register', qs.stringify(params)).then(res => res);

export const userLogin = params => POST('/user/blue/login', params).then(res => res);

