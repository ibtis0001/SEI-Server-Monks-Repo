import React, { Component } from "react";
import {Card, Button } from "react-bootstrap";

export default class OneCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://img.represent.com/uploads/68df14cb91bc6daca567a85a0171767a.jpg?auto=format&w=420" />
        <Card.Body>
          <Card.Text>
          Arnold Schwarzenegger's "Come With Me If You Want To Lift" Tee
          </Card.Text>
          <Card.Title>22.06$</Card.Title>
          <Button variant="secondary">ADD TO Cart</Button>
        </Card.Body>
      </Card>
    );
  }
}
