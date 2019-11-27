import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import MainCont from './MainCont'
import ProudectDetails from './ProductDetails'
import {BrowserRouter,Route} from 'react-router-dom';
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
  
  render() {
   
    return (
    <div className="mainContent">

<HomeCarousel></HomeCarousel>
<br></br>
<br></br>
{/* {console.log(this.state.data)} */}
<MainCont data = {this.state.data} handleCartToggle ={this.props.handleCartToggle}  ></MainCont>

    </div>
    )}
}

