import React, { Component } from 'react';
import { Button,Card,Dropdown,DropdownButton} from 'react-bootstrap';
class Current_Users extends Component {
  constructor(props){
    super(props);
    this.state={
      pass_data:[],
      acepted:[],
      itemState:'On Hold'
    }
    this.switchItemState = this.switchItemState.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:3455/posts/admin/adc')
    .then((resp)=>resp.json())
    .then(data=>this.setState({acepted:data}))
  }
  switchItemState(e){
    console.log(e._id)
  }
  render() {
    const {acepted} = this.state
    return (
      <>
      {
        acepted.map(x=>{
          console.log(x)
          return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={x.imgLink} width='150' height='150'/>
    <Card.Body>
    <Card.Title>{x.fname}</Card.Title>
    <Card.Text>
    {x.pass}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </Card>
  )
        })
      }
      {
        console.log(this.state.itemState)
      }
      </>
    );
  }
}
export default Current_Users;

