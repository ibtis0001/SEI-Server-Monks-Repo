import React, { Component } from "react";
import {Card, Button } from "react-bootstrap";
import {Redirect, } from "react-router-dom"
export default class OneCard extends Component {

state={
  cart:this.props.cart
}

  render() {
    // if(this.state.toProductDetails === true){
    //   <Redirect to='/productDetails' />
    return (

 
      <Card style={{ width: "18rem" }}>
         {/* {console.log(this.props.id)} */}
        <a href = {`/proudectdetails/${this.props.id}`} ><Card.Img variant="top" src= {this.props.img} /></a>
        <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
          {this.props.desc}
          </Card.Text>
          <Card.Title>{this.props.price}</Card.Title>
          <a href = {`/proudectdetails/${this.props.id}`} > <Button variant="secondary"  >Buy Now </Button></a>
        </Card.Body>
      </Card>
      
    );
  }
}