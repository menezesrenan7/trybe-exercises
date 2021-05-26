import './data.js';
import React, { Component } from 'react';


class Pokemon extends Component {
  render () {
    const { name, type, averageWeight } = this.props.pokemon;
    return (
      <div className="Pokemon">
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon