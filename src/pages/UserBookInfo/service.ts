import request from '../../utils/request';
import { BookeInfoData } from './types';

/**
 * 获取图书详情
 */
export const getBooksInfo = async (): Promise<BookeInfoData> => {
  const result = await request({url: '/borrower/books/info'});
  return result.data;
};
