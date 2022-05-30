import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Sprite=styled.img`
  width: 5em;
  height: 5em
`;


class PokemonCarte extends Component {
  state={
      id:0,
      name:'',
      imageURL: '',
  }  
  componentDidMount(){
      const id=this.props.id;
      const name = this.props.name;
      const imageURL = `https://img.pokemondb.net/artwork/${id}.jpg`;
      this.setState({id:id,name: name, imageURL:imageURL});
      
  }  
  



    
  render() {
    const link=`/Details-poke/${this.state.id}`;
    
    return (
      
      <div className='col-md-3 col-sm-6 mb-5'>
          <div className='card'>
          <a href={link} style={{ textDecoration: 'none' }}>
              <div className='card-header'><h1>{this.state.name}</h1></div>
              <div className='card-body'>
              <Sprite
                className='card-img-top rounded mx-auto d-block mt-2'
                src={this.state.imageURL}
                alt="image not found"
              />
              </div>
              </a>
          </div>
      </div>
      
    )
  }
}
export default withRouter(PokemonCarte);