import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import MainCont from './MainCont'
import ProudectDetails from './ProductDetails'
import {BrowserRouter,Route} from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore } from 'redux';
export default class Home extends Component {
  state = {
  data : this.props.data,
//  cart : this.props.cart,
    // select:null,

  }
//   handelSelectedProd = (value)=>{
//     this.setState({
//         select : value
//     })
// } 
=======

export default class Home extends Component {
  state = {
    data : this.props.data,
 cart : this.props.cart
    // select:null,

  }

>>>>>>> df36dd71078f4b3032dd1521273e5d7f0b11bf32
  
  render() {
   
    return (
    <div className="mainContent">

<HomeCarousel></HomeCarousel>
<br></br>
<br></br>
{/* {console.log(this.state.data)} */}
<<<<<<< HEAD
<MainCont data = {this.state.data} handleCartToggle ={this.props.handleCartToggle}  ></MainCont>
=======
<MainCont data = {this.state.data} handleCartToggle ={this.props.handleCartToggle} cart ={this.state.cart}></MainCont>
>>>>>>> df36dd71078f4b3032dd1521273e5d7f0b11bf32

    </div>
    )}
}

