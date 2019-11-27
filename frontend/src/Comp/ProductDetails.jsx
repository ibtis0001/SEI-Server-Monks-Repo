import React, { Component } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
export default class ComponentDetails extends Component {
  state = {
    data: this.props.data,

    cart :this.props.cart
  }

 


  render() {
    let  details = this.state.data.find((element) => {
      const { match: { params } } = this.props;
      
      return element.id == params.id
     
  })


    return (
      <div>
      
        <Container>
          {/* {console.log(details)} */}
          <Row>
            <Col sm={6} elementType="card" >
              <Card.Img className="productDetailImage" variant="top" src={details.image} />
            </Col>
            <Col sm={4}>
              <Card.Body>
                <br></br>



    <Card.Title className="description">{details.name}</Card.Title>
                <br></br>
                <Card.Text className="description">
               {details.desc}
    </Card.Text>
             
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
                <Button variant="secondary" onClick ={() => { this.props.handleCartToggle(details) } }>Add to Cart</Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}