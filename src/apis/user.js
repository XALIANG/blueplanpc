import {POST} from './index';



export const userRegister = param => POST('/user/blue/register',param).then(res=> res);