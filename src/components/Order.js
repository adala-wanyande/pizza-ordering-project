import React from 'react'
import NavigationBar from './NavigationBar'
import {Form, Button} from 'react-bootstrap'

// Controlled forms to be implemented in separate commit
// Logic of submit that triggers success page needs to be done

const Order = () => {
  return (
    <>
      <NavigationBar active="Order"></NavigationBar>
      <h1 className='mt-4 text-center'>Place An Order</h1>
      <div className='form'>
      <Form className="mx-4" style={{ width: '500px' }}>
        <div className='instructions'>
          <Form.Text className="text-muted">
            All input fields must be filled in to place order succesfully.
          </Form.Text>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Benard Wanyande" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control type="text" placeholder="+254712345678" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control type="text" placeholder="Five Star Phase 2, South C, House Number 200" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pizza Flavour</Form.Label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Hawaiian</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <select class="form-select" aria-label="Default select example">
            <option selected>1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </div> 
    </>
  )
}

export default Order