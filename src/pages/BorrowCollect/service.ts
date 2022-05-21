import request from '../../utils/request';

/**
 * 获取收藏列表
 */

export const getCollectBooksList = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/borrower/mine/collectlist', params});
  return result.data;
};
