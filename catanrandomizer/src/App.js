import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (

      <div className="App">
      <h1>Catan Randomizer</h1>
      <Board/>

      <button>Shuffle</button>
          
      </div>
    );
  }
}

export default App;
