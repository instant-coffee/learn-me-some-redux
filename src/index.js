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

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
}

render()
store.subscribe(render)
registerServiceWorker();
