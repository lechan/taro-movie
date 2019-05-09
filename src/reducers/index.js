import { combineReducers } from 'redux'
import counter from './counter'
import list from './list'
import search from './search'

export default combineReducers({
  counter,
  list,
  search
})
