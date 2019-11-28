import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
const jwtDecode = require('jwt-decode')

export default class Register extends Component {
state ={
admin:null,
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
    this.setState({admin:jwtDecode(localStorage.usertoken)})

    console.log(logSuccess)
    if(logSuccess && this.state.admin.user.admin == true){
        this.props.history.push('/Form')
        

    }else if (logSuccess){
        this.props.history.push('/Product')

    }
    else{
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