import React, { Component } from 'react';
import Del from './comps/del'
import { withRouter } from 'react-router-dom';
import UserFront from './comps/user_page'
import Current_Users from './comps/curent_users_addmin.js'
import LogInForm from './comps/loginForm'
import { Button,Card} from 'react-bootstrap';

class Reg extends Component {
  constructor(props){
    super(props);
    this.state={
      api_res:this.props.data,
      rejected:[],
      acepted:[]
    }
    this.routeChange = this.routeChange.bind(this)
  }

  routeChange(e) {


    return fetch(`http://localhost:3455/posts/admin/delete/${e._id}`, {
        method: 'delete'

    }).then(response => response.json())
}


acuser(e) {

  (async () => {
  const rawResponse = await fetch('http://localhost:3455/posts/admin/adc', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({fname:e.fname, lname:e.lname,email:e.email,pass:e.pass})
  });

  const content = await rawResponse.json();

  this.routeChange(e)

  console.log(content);
})();
}

componentDidMount() {
  fetch('http://localhost:3455/posts/admin/adc')
  .then((resp)=>resp.json())
  .then(data=>{
    console.log("ebere: ",data)
    this.setState({acepted:data})})
}



// current Users //








  render() {

    const {data} = this.props
    const {acepted} = this.state

    return (
      <>
      <h1>Reg From</h1>
      <form action="http://localhost:3455/posts/admin/add/" method="post">
      <div>Fiers Name: <input type="text" name="fname"/></div>
      <div>Last Name: <input type="text" name="lname"/></div>
      <div>Last Name: <input type="text" name="email"/></div>
      <div>PassWord: <input type="password" name="pass"/></div>

      <Button type="submit">Regester</Button>
      </form>
      {/* <h1> Users Data<br/>Current Requests : {data.length}</h1> */}
      <h1> Cureent Users : {acepted.length}</h1>
      <ul className='un'>
      {
        acepted.map(x=>{
          return(<li>{x.fname}<br/>
            <from method="get"><button value="Submit" color="primary" className="px-4" onClick={()=>{this.routeChange(x)}}>Reject</button> <button value="Submit" color="primary" className="px-4" onClick={()=>{this.acuser(x)}}>Acsept</button> </from></li>)
        })
      }
      </ul>
      <Current_Users active_users={this.state.acepted}/>

      </>







    );
  }

}

export default Reg;