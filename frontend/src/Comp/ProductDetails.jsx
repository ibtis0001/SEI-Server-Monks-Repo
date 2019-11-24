import React, { Component } from 'react';
import { Container, Col,  Row, Card, Button} from 'react-bootstrap';
export default class ComponentDetails extends Component {
    render() {
        return (
            <div>
<Container>
  <Row>
    <Col sm={6} elementType="card" >
    <Card.Img  className="productDetailImage"variant="top" src="https://img.represent.com/uploads/68df14cb91bc6daca567a85a0171767a.jpg?auto=format&w=420" />
    </Col>
    <Col sm={4}>
    <Card.Body>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Card.Title className="description">Card Title</Card.Title>
    <br></br>
    <Card.Text  className="description">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <> */}
    <style type="text/css">
    {`
    .btn-secondary{
    //   background-color: purple;
      color: white;
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>
    <Button variant="secondary">Add to Cart</Button>
  </Card.Body>
    </Col>
  </Row>
  </Container>
            </div>
        )
    }
}