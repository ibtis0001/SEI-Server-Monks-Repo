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
        console.log(cart)
         let len =cart.length
         let group = cart.reduce((r, a) => {
            console.log("a", a);
            console.log('r', r);
            r[a.id] = [...r[a.id] || [], a];
            return r;
           }, {});
           console.log("group", group);
       let cartelm = cart.map((elm)=>{
        
           
           return <tr>
            <td>{cart.indexOf(elm)+1}</td>
            <td>{elm.id}</td>
            <td>{elm.name}</td>
            {/* <td>{quntity}</td> */}
            </tr>
       })
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
   
  </thead>
  <tbody>
  
  {cartelm}
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
