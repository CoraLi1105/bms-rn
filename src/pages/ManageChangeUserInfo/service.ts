import request from '../../utils/request';
import { UsersInfo } from './types';
/**
 * 获取用户资料
 */
 export const getUsers = async (): Promise<
 UsersInfo
> => {
 const result = await request({
   method: 'GET',
   params: {},
   url: '/manager/manage/userinfo/user',
 });
 return result.data;
};
