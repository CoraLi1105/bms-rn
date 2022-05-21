import request from '../../utils/request';

/**
 * 获取个人信息
 */

export const getBorrowerUserInfo = async () => {
  const result = await request({url: '/borrower/mine/userinfo'});
  return result.data;
};
