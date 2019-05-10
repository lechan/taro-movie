import { TITLE_LIST } from '@constants/list'

const INITIAL_STATE = {
  titleList: []
}

export default function search(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TITLE_LIST: {
      const { list } = action.payload
      return { ...state, titleList: list }
    }
    default:
      return state
  }
}
