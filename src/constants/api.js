export const HOST = process.env.NODE_ENV === 'development' ? 'https://www.lechan.xyz' : 'https://www.lechan.xyz'

// graphql
export const API_GRAPHQL_URL = `${HOST}/movies/graphql`

// list
export const API_MOVIE_LIST = `${HOST}/movies/movieList`

// movieItem
export const API_MOVIE_ITEM = `${HOST}/movies/movie`

// cate
export const API_MOVIE_CATE = `${HOST}/movies/cateList`

// associate
export const API_TITLE_LIST = `${HOST}/movies/associate`
