import {BookCategoryItem} from './types';
import request from '../../utils/request';

/**
 * 获取图书分类
 * @returns
 */
export const getBorrowerBooksCategory = async (): Promise<
  BookCategoryItem[]
> => {
  const result = await request({
    method: 'GET',
    params: {},
    url: '/borrower/books/category',
  });
  return result.data;
};

/**
 * 获取图书推荐列表
 * @param params
 * @returns
 */
export const getBooksRecommentdList = async (params: {
  pageSize?: number;
  current?: number;
}) => {
  const result = await request({url: '/borrower/books/recommend/list', params});
  return result.data;
};

/**
 * 获取首页轮播图
 * @returns
 */
export const getHomeSwiperList = async () => {
  const result = await request({url: '/borrower/home/swiper/list'});
  return result.data;
};
