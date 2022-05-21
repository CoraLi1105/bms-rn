import request from '../../utils/request';

/**
 * 获取管理列表
 */

export const getBorrowManageBookList = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/borrower/manage/list', params});
  return result.data;
};
