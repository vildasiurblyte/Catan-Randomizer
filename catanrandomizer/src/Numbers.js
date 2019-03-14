import React, { Component } from 'react';
import './Numbers.css';

class Numbers extends Component {
/* constructor(props) {
     super(props);
    
  this.state = {
    numbers: {
      
    }
    }
  }  
  
  appendNumber = (numbers) => {
    const randomArr = Object.keys(numbers);
    const randomNumber = randomArr[Math.floor(Math.random() * randomArr.length)];
    numbers[randomNumber] -= 1;
    if (numbers[randomNumber] === 0) delete numbers[randomNumber];
    return randomNumber;
  } */
  
  
  render() {
    return (<div>
      <div>{getRandomNumber()}</div>
    </div>
    )
  }
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


function getRandomNumber () {
  const randomArr = Object.keys(numbers);
  const randomNumber = randomArr[Math.floor(Math.random() * randomArr.length)];
  numbers[randomNumber] -= 1;
  if (numbers[randomNumber] === 0) delete numbers[randomNumber];
  console.log(typeof randomNumber)
  return randomNumber;
}

getRandomNumber();


export default Numbers;