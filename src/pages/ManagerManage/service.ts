import request from '../../utils/request';

/**
 * 获取用户信息列表
 */

export const getUsersInfo = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/manager/manage/userinfo', params});
  return result.data;
};
