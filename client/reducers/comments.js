function postComments(state = [], action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        // from the statr to the one we want to delete
        ...state.slice(0, action.i),
        // after the statr to the one we want to delete
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
  return state
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined')
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  return state
}

 export default comments