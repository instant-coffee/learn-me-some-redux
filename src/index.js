import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

// const state = {
//   todos: [
//     {id: 1, name: 'Render Static UI', isComplete: true},
//     {id: 2, name: 'Create initial state', isComplete: true},
//     {id: 3, name: 'Render based on state', isComplete: true}
//   ]
// }


const todoChangeHandler = (val) => {
  store.dispatch({ type: 'CURRENT_UPDATE', payload: val })
}

const render = () => {
  const state = store.getState()

  ReactDOM.render(<App 
    todos={state.todos} 
    currentTodo={state.currentTodo} 
    changeCurrent={todoChangeHandler}
    />, 
    document.getElementById('root'));
}
 
render()
store.subscribe(render)
registerServiceWorker();
