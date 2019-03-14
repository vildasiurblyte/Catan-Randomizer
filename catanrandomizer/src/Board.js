import React, { Component } from 'react';
import {  HexGrid, Layout, Path, Hexagon, Pattern, Hex } from 'react-hexgrid';
import './Board.css';
//const chooseRandomTile = require('./randomizeMap');

class Board extends Component {
  render() {
    const hexagonSize = { x: 18, y: 18 };
    return (
      <div className="App">
        <HexGrid width={3000} height={3000} viewBox="-90 -50 200 200">
          <Layout size={hexagonSize} spacing={1.01} origin={{ x: 0, y: 0 }}>
            <Hexagon className={addRandomClass()} q={0} r={0} s={0} />
            <Hexagon className={addRandomClass()} q={0} r={1} s={0} />
            <Hexagon className={addRandomClass()} q={0} r={2} s={0} />
            <Hexagon className={addRandomClass()} q={0} r={3} s={0} />
            <Hexagon className={addRandomClass()} q={0} r={4} s={0} />
            <Hexagon className={addRandomClass()} q={-1} r={1} s={0} />
            <Hexagon className={addRandomClass()} q={-1} r={2} s={0} />
            <Hexagon className={addRandomClass()} q={-1} r={3} s={0} />
            <Hexagon className={addRandomClass()} q={-1} r={4} s={0} />
            <Hexagon className={addRandomClass()} q={-2} r={2} s={0} />
            <Hexagon className={addRandomClass()} q={-2} r={3} s={0} />
            <Hexagon className={addRandomClass()} q={-2} r={4} s={0} />
            <Hexagon className={addRandomClass()} q={1} r={0} s={0} />
            <Hexagon className={addRandomClass()} q={1} r={1} s={0} />
            <Hexagon className={addRandomClass()} q={1} r={2} s={0} />
            <Hexagon className={addRandomClass()} q={1} r={3} s={0} />
            <Hexagon className={addRandomClass()} q={2} r={0} s={0} />
            <Hexagon className={addRandomClass()} q={2} r={1} s={0} />
            <Hexagon className={addRandomClass()} q={2} r={2} s={0} />
        </Layout>
          {/* Additional small grid, hexagons generated with generator */}
      
        </HexGrid>
      </div>
    );
  }
}

const values = {
  'hills': 3,
  'forest': 4,
  'mountains': 3,
  'fields': 4,
  'pasture': 4,
  'desert': 1
}


function addRandomClass() {
  const randomArr = Object.keys(values);
  const randomClass = randomArr[Math.floor(Math.random() * randomArr.length)];
  values[randomClass] -= 1;
  if (values[randomClass] === 0) delete values[randomClass];
  return randomClass;
}
  

export default Board;