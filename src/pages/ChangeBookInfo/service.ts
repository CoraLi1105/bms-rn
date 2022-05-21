import request from '../../utils/request';
import { BookeInfoData } from './types';

/**
 * 获取图书信息
 */
export const getBooksInfo = async (): Promise<BookeInfoData> => {
  const result = await request({url: '/manager/book/booksinfo'});
  return result.data;
};
