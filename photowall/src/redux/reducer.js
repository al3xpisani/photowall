import postsListing from '../data/posts'

const postReducer = function posts(state=postsListing,action){
    switch (action.type) {
      case 'REMOVE_POST': {
        console.log('action index ',action.index)
        console.log('start slice',...state.slice(0,action.index))
        console.log('end slice',...state.slice(action.index+1))
        return [...state.slice(0,action.index),...state.slice (action.index+1)]
      }
      case 'ADD_POST': {
        return [...state,action.post]
      }
      default: return state
  }
}

export default postReducer