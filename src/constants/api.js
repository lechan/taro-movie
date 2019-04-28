export const HOST = process.env.NODE_ENV === 'development' ? 'https://www.lechan.xyz' : 'https://www.lechan.xyz'

// graphql
export const API_GRAPHQL_URL = `${HOST}/movies/graphql`

// list
export const API_MOVIE_LIST = `${HOST}/movies/movieList`

// cate
export const API_MOVIE_CATE = `${HOST}/movies/cateList`
