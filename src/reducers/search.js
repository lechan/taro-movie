import { TITLE_LIST } from '@constants/list'

const INITIAL_STATE = {
  titleList: []
}

export default function search(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TITLE_LIST: {
      const { titleList } = action.payload
      return { ...state, list: titleList }
    }
    default:
      return state
  }
}
