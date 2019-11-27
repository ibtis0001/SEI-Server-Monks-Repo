import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import {
  Table,
  Form,
  Button,
  Col,
  Container,
  Row,
  Card
} from "react-bootstrap";
const schema = yup.object({
  title: yup.string().required().min(10,'too short').max(30),
  desc: yup.string().required().min(25).max(250),
  quantityS:yup.number()
  .required()
  .max(999),
  quantityM:yup.number()
    .required()
    .max(999)
    ,
    quantityL:yup.number()
    .required()
    .max(999)
    ,
  // img: yup.object().required(),
  price: yup.number()
    .required()
    .max(9999)
    
});
export default class AddProd extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
            <Formik
                    validationSchema={schema}
                    initialValues={{
                      title: "",
                      desc: "",
                      quantityS: "",
                      cquantityM: "",
                      quantityL: "",
                      price: ""
                    }}
                    validate={values => {
                      const errors = {};
                    
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
              <Form method="get" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    name='title'
                    placeholder="Enter a Short Title "
                    value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.title && !errors.title}
                        isInvalid={
                          !!errors.title && touched.title && errors.title
                        }
                  />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label> Description </Form.Label>
                  <Form.Control
                    type="text"
                    name ='desc'
                    placeholder="Enter a Description for your Product, Be Generous! "
                    value={values.desc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.desc && !errors.desc}
                    isInvalid={
                      !!errors.desc && touched.desc && errors.desc
                    }
                  />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
               

                <Form.Row>
                  <Table>
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>
                        <Form.Control plaintext readOnly defaultValue="S" />
                      </td>
                      <td>
                        <Form.Control type="text" placeholder="quantity" name='quantityS'
                          value={values.quantityS}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.quantityS && !errors.quantityS}
                          isInvalid={
                            !!errors.quantityS && touched.quantityS && errors.quantityS
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                        {touched.quantityS && errors.quantityS}
                        </Form.Control.Feedback>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form.Control plaintext readOnly defaultValue="M" />
                      </td>
                      <td>
                        <Form.Control type="text" placeholder="quantity" name='quantityM'
                          value={values.quantityM}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.quantityM && !errors.quantityM}
                          isInvalid={
                            !!errors.quantityM && touched.quantityM && errors.quantityM
                          }
                          />
                          <Form.Control.Feedback type="invalid">
                        {touched.quantityM && errors.quantityM}
                        </Form.Control.Feedback>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form.Control plaintext readOnly defaultValue="L" />{" "}
                      </td>
                      <td>
                        <Form.Control type="text" placeholder="quantity" name='quantityL'
                          value={values.quantityL}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.quantityL && !errors.quantityL}
                          isInvalid={
                            !!errors.quantityL && touched.quantityL && errors.quantityL
                          } />
                          <Form.Control.Feedback type="invalid">
                        {touched.quantityL && errors.quantityL}
                        </Form.Control.Feedback>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <input
                            ref={ref => {
                              this.uploadInput = ref;
                            }}
                            type="file"
                          />
                        </div>
                        <div>
                          {/* <input
                            ref={ref => {
                              this.fileName = ref;
                            }}
                            type="text"
                            placeholder="Enter the desired name of file"
                          /> */}
                        </div>
                        <br />
                        <div></div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <p>Price </p>
                        <input
                          name="price"
                          type="text"
                          placeholder="Enter the price for your proudect"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.price && !errors.price}
                          isInvalid={
                            !!errors.price && touched.price&& errors.price
                          }
                        />
                      </td>
                      <td></td>
                    </tr>
                  </Table>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
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
