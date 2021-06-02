
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT
} from './Types'

const GitHubReducer = (state,action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading:false
      }
    case SET_LOADING:
      return {
        ...state,
        loading:true
      }
      case SET_ALERT:
        return {
          ...state,
          alert:action.payload.msg,
          alertType:action.payload.alertType
        }
        case REMOVE_ALERT:
          return {
            ...state,
            alert:null,
            alertType:null
          }
      default:
        return state;
  }
}

export default GitHubReducer