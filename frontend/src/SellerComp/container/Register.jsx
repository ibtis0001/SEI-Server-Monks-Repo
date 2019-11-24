
import React, { Component } from 'react'
import { register }  from '../../functionAuth/functionAuth'
import { Form,Button,
Col,
    FormControl,
    Card,
    Container,
    Row
  } from "react-bootstrap";
  import { Formik } from "formik";
  import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup
      .string()
      .email("Enter a vaild email addres")
      .required(),
    password: yup
      .string()
      .min(1)
      .max(20)
      .required(),
    city: yup.string().required()
  });

  
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
            <Container style={{ width: "100%" }}>
            <Row className="justify-content-md-center">
              <Col>
                <Card style={{ width: "100%" }}>
                  <Formik
                    validationSchema={schema}
                    initialValues={{
                      email: "",
                      firstName: "",
                      lastName: "",
                      city: "",
                      password: "",
                      phonenum: ""
                    }}
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
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                      setFieldValue
                    }) => (
            <Form onSubmit={this.onSubmitHandelr}>
            <Row>
                    <Col>
                      <Form.Label column sm="10">
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Label column sm="10">
                        Last name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.lastName && !errors.lastName}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                  </Row>
                  {/* </Form.Group> */}

                  {/* <Form.Group > */}
                  <Row>
                    <Col>
                      <Form.Label column sm="10">
                        Email
                      </Form.Label>

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
                      <Form.Control.Feedback type="invalid">
                        {touched.email && errors.email}
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Label column sm="10">
                        Password
                      </Form.Label>

                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      {errors.password && touched.password && errors.password}
                    </Col>
                  </Row>
                  {/* </Form.Group> */}

                  <Row>
                    <Col>
                      <Form.Label column sm="10">
                        City
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="city"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.city && !errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Label column sm="10">
                        Phone Number
                      </Form.Label>

                      <FormControl
                        type="text"
                        name="phonenum"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phonenum}
                        isInvalid={
                          touched.phonenum && errors.phonenum
                            ? "has-error"
                            : null
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phonenum}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

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
