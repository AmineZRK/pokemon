import React, { Component, useState } from 'react';
import PokemonList from './PokemonList';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
export default class Dashboard extends Component {

  
  render() {
    return (
      
          <div className='row'>
              <div className='col'>
                  <PokemonList/>
              </div>
          </div>
          
      
        
    )
  }
}
