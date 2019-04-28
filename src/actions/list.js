import { MOVIE_LIST } from '@constants/list'
import { API_MOVIE_LIST } from '@constants/api'
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

export const dispatchMovie = () => {}
