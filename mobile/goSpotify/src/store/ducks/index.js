import { combineReducers } from 'redux'

import { reducer as podcasts } from './podcasts'
import { reducer as players } from './players'

export default combineReducers({
  podcasts,
  players
})
