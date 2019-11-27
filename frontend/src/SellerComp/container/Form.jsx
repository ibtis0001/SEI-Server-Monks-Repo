import React, { Component } from 'react'
import Reg from './reg'
import jwt_decode from 'jwt-decode'


export default class Form extends Component {
    
    state={
        data:[],
      }
      componentDidMount() {
        fetch('http://localhost:3455/posts/admin/')
        .then((resp)=>resp.json())
        .then(data=>this.setState({data:data}))
      }
      componentWillMount() {
        if (!localStorage.usertoken){
    
          this.props.history.push('/login')
          
        }
        setTimeout(() => {
          if (!localStorage.usertoken){
    
            this.props.history.push('/login')
            
          }else{
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            console.log(decoded)
            this.setState(decoded.user)
          }
        }, 500);
      
    
      }
    render() {
        const {data} = this.state

        return (
            <div>
                      <Reg data={data.map(x=>{
      return x
    })}/>
            </div>
        )
    }
}
