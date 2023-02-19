import React from 'react'
import NavigationBar from './NavigationBar'
import {Form, Button} from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <NavigationBar active="Contact"></NavigationBar>
      <h1 className='mt-4 text-center'>Send Us A Message</h1>
      <div className='form'>
      <Form className="mx-4" style={{ width: '500px' }}>
        <div className='instructions'>
          <Form.Text className="text-muted">
            All input fields must be filled to send your message succesfully.
          </Form.Text>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email Address</Form.Label>
          <Form.Control type="text" placeholder="johndoe@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control type="text" placeholder="+254712345678" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </div> 
    </>
  )
}

export default Contact