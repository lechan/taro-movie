import { MOVIE_LIST, MOVIE_ITEM } from '@constants/list'
import { API_MOVIE_LIST, API_MOVIE_ITEM } from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 电影列表
 * @param {*} payload
 */
export const dispatchMovieList = payload => createAction({
  url: API_MOVIE_LIST,
  type: MOVIE_LIST,
  payload
})

/**
 * 电影单项
 * @param {*} payload
 */
export const dispatchMovie = payload => createAction({
  url: API_MOVIE_ITEM,
  type: MOVIE_ITEM,
  payload
})
