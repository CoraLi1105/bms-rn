import request from '../../utils/request';

/**
 * 获取图书列表
 */
export const getBooksList = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/manager/book/bookslist', params});
  return result.data;
};

