const initstate = {
  todos: [
    {id: 1, name: 'Create store', isComplete: true},
    {id: 2, name: 'Load state through store', isComplete: false},
    {id: 3, name: 'Handle state changes with Redux', isComplete: false}
  ]
}

export default ( state = initstate, action ) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
  
    default:
      return state
  }
} 