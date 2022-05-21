import request from '../../utils/request';

/**
 * 获取借阅者我的页面
 */

export const getBorrowerMineData = async () => {
  const result = await request({url: '/borrower/mine'});
  return result.data;
};
