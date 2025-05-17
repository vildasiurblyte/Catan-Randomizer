import React, { Component } from 'react';
import './About.css';


class About extends Component {
  render() {
    return (
      <div>
        <h2>Map legend</h2>
      <div className='legend'>
      <div className='hills'>
        <p>Hills</p>
      </div>
      <div className='mountains'>
        <p>Mountain</p>
      </div>
      <div className='pasture'>
        <p>Pasture</p>
      </div>
      <div className='forest'>
        <p>Forest</p>
      </div>
      <div className='desert'>
        <p>Desert</p>
      </div>
      <div className='fields'>
        <p>Fields</p>
      </div>
      </div>
      </div>

    );

  }
}

export default About;