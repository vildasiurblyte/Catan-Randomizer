import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';


const root = () => (
  <div>
    <Home/>
  </div>
)

const info = () => (
  <div>
    <About/>
  </div>
)

const CatanRandom = () => (
  <div>
    <Board/>
  </div>
)

const MyMenu = () => {
  return (
    <div>
      <Link to='/'>
        <button className='navbar'>Home</button>
      </Link>
      <Link to='/about'>
        <button className='navbar'>About</button>
      </Link>
      <Link to='/random'>
        <button className='navbar'>Catan Randomizer</button>
       </Link>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showboard: false,
    }
  }

  shuffle = () => {
    this.setState({showboard: true});
  };
  
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Catan Randomizer</h1>
      <MyMenu/>
        <div>
          <Route exact path='/' component={root}/>
          <Route exact path='/about' component={info}/>
          <Route exact path='/random' component={CatanRandom}/>
        </div>        
        </div>
      </Router>
    );
  }
}


export default App;
