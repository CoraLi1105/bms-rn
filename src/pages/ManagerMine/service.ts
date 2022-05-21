import request from '../../utils/request';

/**
 * 获取管理者我的页面
 */

export const getManagerMineData = async () => {
  const result = await request({url: '/manager/mine'});
  return result.data;
};
