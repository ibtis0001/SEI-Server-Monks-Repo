// import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
import {
    Form,
    Button,
    Col,
    Card,
    Container,
    Row
  } from "react-bootstrap";
  import { Formik } from "formik";



export default class Register extends Component {
state ={}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr =(e)=>{
    e.preventDefault()
    login(this.state)
    this.props.history.push('/profile')
}
    render() {
        console.log(this.state)
        return (
            <Container style={{ width: "100%" }}>
            <Row className="justify-content-md-center">
              <Col>
                <Card style={{ width: "100%" }}>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
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
              isSubmitting,
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
                        isValid={touched.email && !errors.email}
                        isInvalid={
                          !!errors.terms && touched.email && errors.email
                        }
                      />

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
 {errors.password && touched.password && errors.password}
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
              </Form.Group>
              <Button type="submit">Submit form</Button>
        </Form>
        )}
        </Formik>
        </Card>
        </Col>
      </Row>
    </Container>
    )
    }
}