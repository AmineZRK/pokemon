import React, { Component, useState } from 'react';

import styled from 'styled-components';


export default class PokemonCarte extends Component {
  state={
      name:'',
      imageURL: ''
  }  
  componentDidMount(){
      const name = this.props.name.toLowerCase();
      const imageURL = `https://img.pokemondb.net/artwork/${name}.jpg`;
      this.setState({name: name, imageURL:imageURL})
  }  

    
  render() {
    return (
      <div className='col-md-3 col-sm-6 mb-5'>
          <div className='card'>
              <div className='card-header'><h1>{this.state.name}</h1></div>
              <div className='card-body'>
              <img
                className='card-img-top rounded mx-auto mt-2'
                src={this.state.imageURL} 
              />
              </div>
          </div>
      </div>
    )
  }
}
