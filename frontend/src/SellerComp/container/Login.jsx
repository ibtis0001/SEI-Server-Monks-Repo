<<<<<<< HEAD
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from "react";
import { login } from "../../functionAuth/functionAuth";
import { Form, Button, Col, Card, Container, Row } from "react-bootstrap";
import { Formik } from "formik";

export default class Register extends Component {
  state = {};
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = e => {
    e.preventDefault();
    login(this.state);
    this.props.history.push("/profile");
  };
  render() {
    console.log(this.state);
    return (
      <Container style={{ width: "100%" }}>
        <Row className="justify-content-md-center">
          <Col>
            <Card style={{ width: "100%" }}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                // onSubmit={(values, { setSubmitting }) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 400);
                // }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <Form onSubmit={this.onSubmitHandelr}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.email && !errors.email && errors.email}
                        isInvalid={
                          !!errors.terms && touched.email && errors.email
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {touched.email && errors.email}
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && errors.password}
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox"></Form.Group>
                    <a href="/register">
                      {" "}
                      <Button
                        style={{
                          margin: "20px",
                          height: "100",
                          width: "100px"
                        }}
                      >
                        Register
                      </Button>
                    </a>

                    <Button
                      style={{ margin: "20px", height: "100", width: "100px" }}
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
=======
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
>>>>>>> df36dd71078f4b3032dd1521273e5d7f0b11bf32
