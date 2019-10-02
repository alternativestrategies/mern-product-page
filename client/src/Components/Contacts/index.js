// import React, {useState} from 'react';
import React from 'react';
import axios from 'axios';
import {Form, Col, Container,  Row} from 'react-bootstrap';

class Contacts extends React.Component{
  state = {
    first_name: "",
    last_name: "",
    email: "",
    product_id: 0
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      product_id: e.target.value
    })
  }

  onSubmit = (e) => {
    const {first_name, last_name, email, product_id} = this.state;
    axios.post('/api/newcontacts', {first_name, last_name, email, product_id})
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      product_id: 0
    })
  }

  render(){
    const {first_name, last_name, email} = this.state;

  return(
<div className="no-bg pb-4 ">
  <h2>Contact Us</h2>
<Container>
<Row>
<Col xs={10} md={7} className="mx-auto mt-4 mb-3">
<Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      name="first_name"
      value={first_name}
      onChange={this.onChange}
      placeholder="First Name" />
      <Form.Control.Feedback type="invalid">Please enter first name</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      name="last_name"
      value={last_name}
      onChange={this.onChange}
      placeholder="Last Name" />
      <Form.Control.Feedback type="invalid">Please enter last name</Form.Control.Feedback>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control 
    required
    type="email"
    name="email"
    value={email}
    onChange={this.onChange}
    placeholder="Email Address" />
    <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
  <Form.Label>Product</Form.Label>
      <Form.Control 
      required
      as="select" 
      name="product_id"
      onChange={this.onChange}>
      <option  value="0">Choose...</option>
      <option value="1">Pages of Petals Daisy Notebook</option>
      <option value="1">Creative Die Cut Washi Tapes</option>
      <option value="2">Skydue Floral File Accordion</option>
      <option value="3">Stabilo Boss Pastel Highlighter 6-pack</option>
      <option value="4">LE PEN 10-PACK - RAINBOW</option>
      <option value="5">Zebra Mildliner 15ct Dual-tip Markers</option>
      <option value="6">Large 17-Month Academic Planner</option>
      <option value="7">Chinatown Market X Smiley UO Exclusive Smiley Notebook</option>
      <option value="8">My Neighbor Totoro Gel Ink Pen</option>
      <option value="9">10 Psc Candy Color Decorative Adhesive Tapes</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">Topic is required</Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="comments">
    <Form.Label>Comments</Form.Label>
    <Form.Control 
    required
    as="textarea" 
    rows="3"
    placeholder="Comments"/>
    <Form.Control.Feedback type="invalid">Comment is required</Form.Control.Feedback>
  </Form.Group>

    <div className="text-center">
    <button className="btn-form" type="submit">
        Submit
      </button>
    </div>
      </Form>
    </Col>
  </Row>
</Container>
</div>
    )
  }
}



export default Contacts;