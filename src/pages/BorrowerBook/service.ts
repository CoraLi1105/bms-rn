import request from '../../utils/request';

/**
 * 获取图书列表
 */
export const getBooksList = async (params: {pageSize: number; current: 1}) => {
  const result = await request({url: '/borrower/books/list', params});
  return result.data;
};

