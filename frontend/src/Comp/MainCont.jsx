import React, { Component } from "react";
import OneCard from './OneCard'
// import { Container ,Col,Card,Button,Row} from "react-bootstrap";
// import { Card, CardGroup, Button,CardDeck,CardColumns } from "react-bootstrap"

export default class MainCont extends Component {
  state = {
    data : this.props.data,
    select :'',
    cart:this.props.cart
  }
  render() {
    //map the card elm

    const products = this.props.data.map((item)=>{return  <OneCard 
      id={item.id}
      img = {item.image}
      name= {item.name}
       desc = {item.desc}
       price = {item.price}
       handleCartToggle={this.props.handleCartToggle}
<<<<<<< HEAD
      //  cart={this.props.cart}
=======
       cart={this.state.cart}
>>>>>>> df36dd71078f4b3032dd1521273e5d7f0b11bf32
       select = {item}
     />
  
    })
    


    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, margin:"auto"}}>
          
            {products}
           {/* {console.log(this.props.data)} */}

         </div>
      
    );
  }
}

