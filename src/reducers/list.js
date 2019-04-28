import { MOVIE_LIST } from '@constants/list'

const INITIAL_STATE = {
  movieList: []
}

export default function list(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_LIST: {
      const { movieList } = action.payload
      return { ...state, list: movieList }
    }
    default:
      return state
  }
}
