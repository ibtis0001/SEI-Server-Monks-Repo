import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NavBar/NaveBar'
import { Container } from 'semantic-ui-react';
import {   Route ,  BrowserRouter as Router } from 'react-router-dom'
import Landing from './components/container/Landing'
import Login from './components/container/Login'
import Register from './components/container/Register'
import Profile from './components/container/Profile'
import Reg from './components/container/reg'

import jwtDecode from 'jwt-decode'


// comps //

import LogIn from './components/container/comps/reg'
import NavBar from './components/container/comps/nav'


class App extends Component {
  state={
    data:[],
    isAuth : false
  }


    componentDidMount() {
      let token = localStorage.getItem('usertoken')
      console.log(token)//&& token.length > 0)
      if(token && token.length > 0){
        let info = jwtDecode(token)
        // info.isAdmin
        this.setState({isAuth : true})
      }
    //   fetch('http://localhost:3455/posts/admin/')
    //   .then((resp)=>resp.json())
    //   .then(data=>this.setState({data:data}))
    }


  render() {
    console.log(this.state.isAuth);
    
  return (
    <Router>
    <div className="App">
      <NaveBar isAuth={this.state.isAuth} />
    
        <Route exact path='/' component={Landing} />
        <Container  className="main">
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/reg' component={Reg}  />


      </Container>
      
    </div>
    </Router>
  );
}
}
export default App;
