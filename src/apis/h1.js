import {GET} from './index';


export const VerificationCode = param => GET('http://localhost:3000/getCaptcha').then(res=> res);