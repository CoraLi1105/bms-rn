import request from '../../utils/request';

/**
 * 获取借阅信息列表
 */

export const getBorrowInfoList = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/manager/home/borrowinfo', params});
  return result.data;
};
