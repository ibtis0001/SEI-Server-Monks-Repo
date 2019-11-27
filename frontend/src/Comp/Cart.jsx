import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap'
export default class Cart extends Component {
    state={
        cart:this.props.cart
    }
    componentDidMount(){
        var cart = JSON.parse(localStorage.getItem('product_cart'))
let temp=this.state.cart
// temp.push(this.state.cart)
temp.push(cart)
        this.setState({cart:temp})
    }
    // 
    render() {
        var cart = JSON.parse(localStorage.getItem('product_cart'))
        console.log(this.state.cart)
       
        // console.log(this.state.cart)
       //mapping to list order items another mapping to calucate sum
      //map1 //return   <tr>
    //   <td>1</td>
    //   <td>Mark</td>
    //   <td>Otto</td>
    //   <td>@mdo</td>
    // </tr>
    //map2 retur prics sum

        return (
            <div>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Order No</th>
      <th>item </th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
    
        <td>
         
        Price
        </td>
        <td colSpan="3">
        0000
        {/* price sum */}
        </td>

    </tr>
  </tbody>
</Table>
<Button > Check Out </Button>
            </div>
        )
    }
}
