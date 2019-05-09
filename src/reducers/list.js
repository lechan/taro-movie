import { MOVIE_LIST, MOVIE_ITEM } from '@constants/list'

const INITIAL_STATE = {
  movieList: []
}

export default function list(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_LIST: {
      const { movieList } = action.payload
      return { ...state, list: movieList }
    }
    case MOVIE_ITEM: {
      const { movie } = action.payload
      return { ...state, data: movie }
    }
    default:
      return state
  }
}
