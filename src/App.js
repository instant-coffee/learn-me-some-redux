import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Redux</h1>
        </header>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-list">
            <ul>
              <li>
                <input type="checkbox"/> Create static UI
              </li>
              <li>
                <input type="checkbox" /> Create Initial State
              </li>
              <li>
                <input type="checkbox" /> Use State to Render UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
