import {  Checkbox, Form , } from 'semantic-ui-react'
import React, { Component } from 'react'

    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        
      ]
      
      export default class Register extends Component {
        state = {}
      
        handleChange = (e, { value }) => this.setState({ value })
      
        render() {
          const { value, } = this.state
          return (
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Title' />
                <Form.Input fluid label='Price' placeholder='Price' />
                <Form.Select
                  fluid
                  label='Gender'
                  options={options}
                  placeholder='Gender'
                />
              </Form.Group>
              <Form.Button>Uplode the Design</Form.Button>

              <Form.Group inline>
                <label>Size</label>
                <Checkbox 
                  label='Small'
                  value='sm'
                  checked={value === 'sm'}
                  onChange={this.handleChange}
                />
                <Checkbox 
                
                  label='Medium'
                  value='md'
                  checked={value === 'md'}
                  onChange={this.handleChange}
                />
                <Checkbox 
                  label='Large'
                  value='lg'
                  checked={value === 'lg'}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.TextArea label='Description' placeholder='Description' />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Form.Button>Submit</Form.Button>
            </Form>
          )
        }
      }