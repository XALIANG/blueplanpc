import {POST,GET} from './index';
import qs from 'qs';


export const userRegister = param => POST('/user/blue/register',param).then(res=> res);

export const userLogin = param => POST('/user/blue/login',param).then(res=> res);

export const userCodeImage = param => GET('blue/code').then(res=> res);
