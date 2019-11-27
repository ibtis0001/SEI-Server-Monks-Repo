import React, { Component } from 'react';
import Del from './comps/del'
import { withRouter } from 'react-router-dom';
import UserFront from './comps/user_page'
import Current_Users from './comps/curent_users_addmin.js'
import LogInForm from './comps/loginForm'
import { Button,Card} from 'react-bootstrap';
import {storage} from './firebase'

class Reg extends Component {
  constructor(props){
    super(props);
    this.state={
      api_res:this.props.data,
      rejected:[],
      acepted:[],
      img:null,
      url:''
    }
    this.routeChange = this.routeChange.bind(this)
    this.FileSelectedHandler = this.FileSelectedHandler.bind(this)
    this.fileUploadHandler = this.fileUploadHandler.bind(this)
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
    body: JSON.stringify({fname:e.fname, lname:e.lname,email:e.email,pass:e.pass,isSuper:e.isSuper,imgLink:this.state.url})
  });
  const content = await rawResponse.json();
  this.routeChange(e)
  console.log(content);
})();
}
componentDidMount() {
  fetch('http://localhost:3455/posts/admin/adc')
  .then((resp)=>resp.json())
  .then(data=>this.setState({acepted:data}))
}
FileSelectedHandler = event => {
  if(event.target.files[0]){
    const img = event.target.files[0];
    this.setState(()=>({img}))
  }
}
// Firebase upload
 fileUploadHandler(){
  const {img} = this.state
  console.log(img)
  const UploadTask = storage.ref(`prodimg/${img.name}`).put(img)
   UploadTask.on('state_changed',
  (snapshot)=>{
  },
  (error)=>{
    console.log(error);
  },
()=>{
  storage.ref('prodimg').child(img.name).getDownloadURL().then(url=>{
    this.setState({url})
    console.log(this.state.url);
    return this.state.url
  })
})
}
// current Users //
  render() {
    const {data} = this.props
    const {acepted} = this.state
    return (
      <>
      <h1>DashBoard</h1>
      <form action="http://localhost:3455/posts/admin/add/" method="post">
      <div>Item Name: <input type="text" name="fname"/></div>
      <div>Price: <input type="text" name="lname"/></div>
      <div>Size: <input type="text" name="email"/></div>
      <div>Discription: <input type="text" name="pass"/></div>
      <input type="file" onChange={this.FileSelectedHandler}/>
      <div><Button onClick={this.fileUploadHandler} name='imgLink'>Upload</Button></div>
      <Button type="submit">Send</Button>
      </form>
      <h1> Users Data<br/>Current Requests : {data.length}</h1>
      <h1> Cureent Users : {acepted.length}</h1>
      <ul className='un'>
      {
        data.map(x=>{
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