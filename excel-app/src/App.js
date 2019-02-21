import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">

      <form>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
        <label>
          Email:
          <input type="text" name="email"></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactz
          </a>
        </header>
      </div>
    );
  }
}

export default App;
