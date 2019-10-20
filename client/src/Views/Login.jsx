import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="loginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>


            <Link to="/dashboard" className="btn btn-primary float-left" >
                  Submit
            </Link>

        </Form>
      </Container>

    </div>
  )
}
