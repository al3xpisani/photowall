import React,{useReducer} from 'react'
import GitHubContext from './GitHubContext'
import GitHubReducer from './GitHubReducer'

import FetchData from '../../component/utils/FetchData'

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT
} from './Types'

const GitHubStateActions = props => {
  const initialState={
    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null,
    alertType:null,
  }
  const [state,dispatch] = useReducer(GitHubReducer,initialState)

  //Search Users
  const searchUser = (searchText)=> {
    setLoading()
    FetchData('https://api.github.com/search/users',`?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`).then(
      data=>{
        // console.log('data.items',data)
        dispatch({
          type:SEARCH_USERS,
          payload:data.items
        })
      })
  }

  //Get Users

  //Get Repos

  //Clear Users

  //Set Loading
  const setLoading=()=> dispatch({type:SET_LOADING})

  const setAlert = (msg,alertType) => {
    dispatch({
      type:SET_ALERT,
      payload:{ msg,alertType }
    })
    setTimeout(()=>dispatch({type:REMOVE_ALERT}),5000)
  }
  return <GitHubContext.Provider value={
    {
      users: state.users,
      user: state.user,
      repos:state.repos,
      loading:state.loading,
      alert:state.alert,
      alertType:state.alertType,
      searchUser,
      setAlert
    }}>
    {props.children}
    </GitHubContext.Provider>

}

export default GitHubStateActions