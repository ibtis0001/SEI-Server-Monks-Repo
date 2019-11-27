import React, { Component } from 'react';
import LogIn from './reg.js'
import './main.css'
import Home from './home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <>


      <ul className='nav'>
      <li><a href="http://localhost:3000/login">Login</a></li>
      <li><a href="/Users/mohammedalfisal/desktop/pro3/myapp/src/comps/home.js">Regestr</a></li>
      <li><a href="/Users/mohammedalfisal/desktop/pro3/myapp/src/comps/reg.js">Home</a></li>
      </ul>


      </>
    );
  }

}

export default NavBar;
