import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Action types and creators
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null
})

export const PodcastsTypes = Types
export default Creators

/**
 * Initial State
 */

export const INITIAL_STATE = Immutable({
  data: []
})

/**
 * reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, action) => state.merge({ data: action.data })
})
