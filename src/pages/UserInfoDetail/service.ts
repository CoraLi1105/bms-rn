import request from '../../utils/request';
import { UsersInfo, BorrowListItem } from './types';

/**
 * 获取用户借阅图书列表
 */
export const getUsersBorrowList = async (params: {
  pageSize?: number;
  current?: number;
}): Promise<BorrowListItem[]> => {
  const result = await request({url: '/manager/manage/userinfo/borrowlist',params});
  return result.data;
};
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
