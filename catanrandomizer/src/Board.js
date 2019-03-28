import React, { Component } from 'react';
import {  HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import './Board.css';

const numSave = [];
const mapSave = [];



class Board extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      showboard: false,
      savedMap: false,
    }
    /* if (localStorage.getItem('map') && localStorage.getItem('number')) {
      this.state.map = JSON.parse(localStorage.getItem('map'));
      this.state.number = JSON.parse(localStorage.getItem('number'));
    } */
  }

  componentDidMount () {
    console.log('componentDidMount')
    if(!localStorage.getItem('map') && !localStorage.getItem('number')) {
      this.mapID = () => this.shuffle();
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
    localStorage.setItem('map', JSON.stringify(mapSave));
    localStorage.setItem('number', JSON.stringify(numSave));
  }
  
  shuffle = () => {
    this.setState({showboard: true});
  };

  addRandomClass = (values, id) => {
    if (this.state.map && this.state.map.length > 0) {
      return this.state.map[id].class;
    }
    const randomArr = Object.keys(values);
    const randomClass = randomArr[Math.floor(Math.random() * randomArr.length)];
    values[randomClass] -= 1;
    if (values[randomClass] === 0) delete values[randomClass];
    mapSave.push({class: randomClass });
    return randomClass;
  }

  getRandomNumber = (numbers, id) => {
    if (this.state.number && this.state.number.length > 0) {
      return this.state.number[id].number;
    }
    const randomArr = Object.keys(numbers);
    const randomNumber = randomArr[Math.floor(Math.random() * randomArr.length)];
    numbers[randomNumber] -= 1;
    if (numbers[randomNumber] === 0) delete numbers[randomNumber];
    numSave.push({number: randomNumber});
    return randomNumber;
  }
  
  render() {

    const values = {
      'hills': 3,
      'forest': 4,
      'mountains': 3,
      'fields': 4,
      'pasture': 4,
    }

    const numbers = {
      '2': 1,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '8': 2,
      '9': 2,
      '10': 2,
      '11': 2,
      '12': 1
    }

  return (
    <div className="App">
      <div>
        {this.state.showboard}
        <button className='btn' onClick={this.shuffle}>Shuffle</button>
      </div>
      <HexGrid width={800} height={800} viewBox="-100 40 200 70">
        <Layout size={{ x: 16, y: 16 }} spacing={1.01} origin={{ x: 0, y: 0 }}>
            <Hexagon className={this.addRandomClass(values, 1)} q={0} r={0} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 1)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 2)} q={0} r={1} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 2)}</Text>
            </Hexagon> 
            <Hexagon className={'desert'} q={0} r={2} s={0}>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 3)} q={0} r={3} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 3)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 4)} q={0} r={4} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 4)}</Text>
            </Hexagon> 
            <Hexagon  className={this.addRandomClass(values, 5)} q={-1} r={1} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 5)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 6)} q={-1} r={2} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 6)}</Text>
            </Hexagon> 
            <Hexagon  className={this.addRandomClass(values, 7)} q={-1} r={3} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 7)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 8)} q={-1} r={4} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 8)}</Text>
            </Hexagon> 
            <Hexagon  className={this.addRandomClass(values, 10)} q={-2} r={2} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 10)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 11)} q={-2} r={3} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 11)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 12)} q={-2} r={4} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 12)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 13)} q={1} r={0} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 13)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 14)} q={1} r={1} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 14)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 15)} q={1} r={2} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 15)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 16)} q={1} r={3} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 16)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 17)} q={2} r={0} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 17)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 18)} q={2} r={1} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 18)}</Text>
            </Hexagon> 
            <Hexagon className={this.addRandomClass(values, 19)} q={2} r={2} s={0}>
              <Text className={'text'}>{this.getRandomNumber(numbers, 19)}</Text>
            </Hexagon> 
        </Layout>
      </HexGrid>
      </div>
    );
  }
}






export default Board;




