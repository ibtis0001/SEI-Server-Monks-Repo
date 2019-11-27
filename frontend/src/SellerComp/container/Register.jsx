import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { register }  from '../../functionAuth/functionAuth'
export default class Register extends Component {
state ={}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr =(e)=>{
    e.preventDefault()
    register(this.state)
    this.props.history.push('/login')
}
    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.onSubmitHandelr}>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' name="first_name" 
                onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' name="last_name"
                 onChange ={this.onChangHandler} />
            </Form.Field>
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
