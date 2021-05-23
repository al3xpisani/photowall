import database from '../database/config'

export function startAddingPost(post){
  return (dispatch) => {
    return database.ref('posts').update({[post.id]:post}).then(()=>{
      dispatch(addPost(post))
    })
  }
}

export function startRemovingPost(index,id){
  return (dispatch)=>{
    return database.ref(`posts/${id}`).remove().then(()=>{
      dispatch(removePost(index))
    })
  }
}

export function removePost(index){
  return {
    type:'REMOVE_POST',
    index:index
  }
}

export function addPost(post){
  return {
    type: 'ADD_POST',
    post
  }
}