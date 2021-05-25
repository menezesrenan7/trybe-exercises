import React, { Component } from 'react';
import Pokemon from './pokemon';
import data from './data';

class Pokedex extends Component {
  render() {
    return (
      data.map((pokemon, index) => 
        <Pokemon key={index} pokemon={pokemon} />
      )
    );
  }
}

export default Pokedex;