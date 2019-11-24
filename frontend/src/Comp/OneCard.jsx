import React, { Component } from "react";
import {Card, Button } from "react-bootstrap";
import {Redirect, } from "react-router-dom"
export default class OneCard extends Component {
// state={
//   toProductDetails : false,
// }
  render() {
    // if(this.state.toProductDetails === true){
    //   <Redirect to='/productDetails' />
    return (
      <div  >
      <Card style={{ width: "18rem" }}>
        <a href = '/proudectdetails' ><Card.Img variant="top" src="https://img.represent.com/uploads/68df14cb91bc6daca567a85a0171767a.jpg?auto=format&w=420" /></a>
        <Card.Body>
          <Card.Text>
          Arnold Schwarzenegger's "Come With Me If You Want To Lift" Tee
          </Card.Text>
          <Card.Title>22.06$</Card.Title>
          <Button variant="secondary">Add to Cart</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}