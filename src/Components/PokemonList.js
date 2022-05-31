import React, { Component} from 'react';
import axios from 'axios';
import PokemonCarte from './PokemonCarte';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 25% auto;
  border-color: red;
`;

export default class PokemonList extends Component {
  state={
    pokemon: null
  }


  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(res => {
      const pokemon=res.data['results'] ;
      this.setState({pokemon});
    });
    console.log(this.state.pokemon)
    
  }
  render() {
    return (
      <>
        {this.state.pokemon ? (
          <div className='row'>
            {this.state.pokemon.map(poke =>(
              <PokemonCarte 
                key={poke.id}
                id={poke.name}
                name={poke.name}
              />
            ))}
          </div>
          
        ) : (<ClipLoader color={'red'} css={override} size={150} />)}
        
      </>
    )
  }
}
