import React, { Component, useState} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default class NavBar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <a href='#' className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">pokemon</a>
          </nav>
      </div>
    )
  }
}
