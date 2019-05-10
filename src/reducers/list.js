import { MOVIE_LIST, MOVIE_ITEM } from '@constants/list'

const INITIAL_STATE = {
  movieList: []
}

export default function list(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_LIST: {
      const movieList = [...state.movieList, ...action.payload.list]
      return { ...state, movieList }
    }
    case MOVIE_ITEM: {
      const movieList = [...state.movieList, ...[action.payload]]
      return { ...state, movieList }
    }
    default:
      return state
  }
}
