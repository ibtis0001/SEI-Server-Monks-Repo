import React, { Component } from 'react'
import Reg from './reg'
var jwtDecode = require('jwt-decode');


export default class Form extends Component {
    state={
        data:[],
        decoded :jwtDecode(localStorage.usertoken)
      }
      componentWillMount() {
        fetch('http://localhost:3455/posts/admin/')
        .then((resp)=>resp.json())
        .then(data=>this.setState({data:data}))
      }
      componentDidMount() {
        if (!localStorage.usertoken){
          this.props.history.push('/login')
          
        }
        setTimeout(() => {
            
            if (this.state.decoded.user.admin != true){
              this.props.history.push('/Product')
          // }else{
          //   const token = localStorage.usertoken
          //   const decoded = jwt_decode(token)
          //   console.log(decoded)
          //   this.setState(decoded.user)
          }
        }, 500);
      
    
      }
    render() {
        const {data} = this.state
        console.log()
        return (
            <div>
                      <Reg data={data.map(x=>{
      return x
    })}/>
            </div>
        )
    }
}
