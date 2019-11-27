import React, { Component } from 'react';
import Home from './Comp/Home'
import Header from './Comp/Header'
import Profile from './SellerComp/container/Profile'
import LoginS from './SellerComp/container/Login'
import RegisterS from './SellerComp/container/Register'
import ProudectDetails from './Comp/ProductDetails'
import Footer from './Comp/Footer'
import './App.css'
import { getToken, setToken, logout } from './services/auth'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom';
import PDB from './PDB'
import Form from './SellerComp/container/Form'
import Product from './SellerComp/container/Product'

let header = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    user: "",
    errorMsg: '',
    isAuthenticated: false,
    hasError: false,
    data: PDB.plants,
    cart: [],
    select:null,
    
  }
  this.handleCartToggle = this.handleCartToggle.bind(this);
  }
  

  handleCartToggle =(select) =>{
    console.log('gggggggggggcart');
    console.log(select)
 this.setState({cart: [...this.state.cart, select]})
    // var temp = []
    //   temp = this.state.cart

      // temp.push(select)
        this.setState({
      //     cart : temp,
          select:select})
      //     console.log(this.state.cart)
      localStorage.setItem('product' , select)

   }


  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = { ...this.state }
    data[e.target.name] = e.target.value

    this.setState(data)
  }


  loginHandler = (e) => {
    axios.post('/api/auth/login', { email: this.state.email, password: this.state.password })
      .then(response => {
        console.log(response.data)
        if (response.data.token) {
          setToken(response.data.token)

          let data = { ...this.state }
          data.user = response.data.user
          data.isAuthenticated = true
          data.hasError = false

          this.setState(data)

          this.getGames()
        }

      })
      .catch(err => {
        let data = { ...this.state }
        data.hasError = true
        this.setState(data)

      })
  }
  registerHandler = (e) => {
    axios.post('/api/auth/', {})
      .then(response => {

      })
      .catch()
  }

  logout = () => {
    logout()
    let data = { ...this.state }
    //reset everything on logout
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""


    this.setState(data)
  }
  render() {
    return (
      <div className="App">
        <Header></Header>

        {/* {lo} */}

        <Route exact path='/' render={(props) => this.state.data !== null ? <Home {...props} data={this.state.data} handleCartToggle={this.handleCartToggle} select ={this.state.select}  /> : <Home></Home>} />
        {/* <Route exact path ='/signin' component ={Login}></Route> */}
        {/* <Route exact path ='/signup' component ={Signup}></Route> */}
        <Route exact path='/login' component={LoginS}></Route>
        <Route exact path='/register' component={RegisterS}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/form' component={Form}></Route>
        <Route exact path='/Product' component={Product}></Route>


        {/* <Route exact path ='/signup' component ={Signup}></Route> */}
        <Route exaxt path='/proudectdetails/:id' render={(props) => this.state.data !== null ? <ProudectDetails {...props} data={this.state.data} handleCartToggle = {this.handleCartToggle}  select ={this.state.select} /> : null} />


        <Footer />
        {/* <Home></Home> */}
      </div>
    );
  }
}

export default App;
