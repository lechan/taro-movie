import { TITLE_LIST } from '@constants/list'
import { API_TITLE_LIST } from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 联想搜索列表
 * @param {*} payload
 */
export const dispatchAssociateList = payload => createAction({
  url: API_TITLE_LIST,
  type: TITLE_LIST,
  payload
})

export const dispatchSearch = () => {}
