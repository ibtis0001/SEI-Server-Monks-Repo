import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
const jwt = require('jsonwebtoken');

export default class Register extends Component {
state ={
    error : ""
}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr = async (e)=>{
    e.preventDefault()
    let logSuccess = await login(this.state)
    console.log(logSuccess)
    if(logSuccess){
        this.props.history.push('/form')
        
    }else{
        this.setState({ error : "Login error "})
    }
    
}
    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.onSubmitHandelr}>
                {(this.state.error) ? (<div className="ui negative message">
<i className="close icon"></i>
<div className="header">
{this.state.error}
</div>
</div>) : ""}
            <Form.Field>
                <label>email</label>
                <input placeholder='email' name="email" 
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input placeholder='password'  name = "password"
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to terms of use' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
    }
}