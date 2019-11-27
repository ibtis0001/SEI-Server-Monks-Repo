import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";





const modalStyle = {
  float: "right",
  color: "red",
}

export default class Header extends Component {
  state = {
    open: false
  };



  onOpenModal = () => {

    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {


    return (
      <div>
        <Navbar bg="light" expand="lg" style={{padding:'0px'}}>
          <Navbar.Brand  href="/"><img height='70px' width='70px' src='https://i.ibb.co/bj9fYKr/download.png' />  </Navbar.Brand>
       
            <Nav className="ml-auto">
              <Nav.Link href="/register">Seller </Nav.Link>
              <Nav.Link href="/login">Admin</Nav.Link>
              {/* <Nav.Link href="/sellerpage">I'm a Seller !</Nav.Link> */}
            </Nav>
            
          <a href="/Cart"> <Image   className='m-sm-4' height='30px' width='30px' src ='https://image.flaticon.com/icons/png/512/1374/1374128.png'></Image> </a> 
          
        </Navbar>
      </div>
    );
  }
}
