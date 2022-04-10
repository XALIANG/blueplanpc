import { POST, GET } from './index';
import qs from 'qs';

export const role = (params) => GET('/user/public/role_list', params).then((res) => res);
