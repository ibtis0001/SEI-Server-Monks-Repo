import React , { Component } from 'react';
import Home from './Comp/Home'
import Header from './Comp/Header'
import Profile from './SellerComp/container/Profile'
import LoginS from './SellerComp/container/Login'
import RegisterS from './SellerComp/container/Register'
import { getToken, setToken, logout} from './services/auth'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';

let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}

class App extends Component {
  state = {
  
    user : "",
    errorMsg : '',
    isAuthenticated : false,
    hasError : false
  }

  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = {...this.state}
    data[e.target.name] = e.target.value

    this.setState(data)
  }

  loginHandler = (e) => {
    axios.post('/api/auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      console.log(response.data)
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.hasError = false

        this.setState(data)

        this.getGames()
      }
      
    })
    .catch(err =>{
      let data = {...this.state}
        data.hasError = true
        this.setState(data)

    })
  }
  registerHandler = (e) => {
    axios.post('/api/auth/',{})
    .then( response => {

    })
    .catch()
  }

  logout = () =>{
    logout()
    let data = {...this.state}
    //reset everything on logout
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""
    data.games = []
  
    this.setState(data)
  }
    render(){
  return (
    <div className="App">
       <Header></Header>
      <BrowserRouter>
<Route exact path ='/' component ={Home}></Route>
{/* <Route exact path ='/signin' component ={Login}></Route> */}
{/* <Route exact path ='/signup' component ={Signup}></Route> */}
<Route exact path = '/login' component ={LoginS}></Route>
<Route exact path = '/register' component ={RegisterS}></Route>
<Route exact path = '/profile' component = {Profile}></Route>
{/* <Route exact path = '/sellerpage' component = {SellerPage}></Route> */}
      </BrowserRouter> 
    

     {/* <Home></Home> */}
    </div>
  );
}
}

export default App;
