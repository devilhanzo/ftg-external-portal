import React from 'react'
import { Button, Form, Container} from 'react-bootstrap'
import { AuthenInput } from './components/AuthenInput'
// import 'bootstrap/dist/css/bootstrap.min.css'

export const Portal = () => (
  <Container className="text-center">
  <Form className="form-signin" >
    <AuthenInput className="form-control" placeholder="User ID" type="username" id="username" />
    <AuthenInput className="form-control" placeholder="Password" type="password" id="password" />
    <Button variant="primary" type="submit">
      Login
    </Button>
    </Form>
  </Container>
)
