import React, { Component, useState} from 'react';
import axios from 'axios';
import PokemonCarte from './PokemonCarte';

export default class PokemonList extends Component {
  state={
    pokemon: []
  }


  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json').then(res => {
      const pokemon=res.data;
      this.setState({pokemon})
    });
    
  }
  render() {
    return (
      <>
        {this.state.pokemon ? (
          <div className='row'>
            {this.state.pokemon.map(poke =>(
              <PokemonCarte 
                key={poke.id}
                name={poke.name.english}
              />
            ))}
          </div>
        ) : (<h1>Pokemon</h1>)}
      </>
    )
  }
}
