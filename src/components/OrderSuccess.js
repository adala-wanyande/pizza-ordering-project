import React from 'react'
import {Alert, Table, Form} from 'react-bootstrap'

const OrderSuccess = ({ orderSuccessObject }) => {
  return (
    <div class="m-4">
      <Alert variant ="success">
        <Alert.Heading>Thank you for your order!</Alert.Heading>
        <Form.Text>Hello, {orderSuccessObject.name}! Thank you for purchasing from our restaurant. Your order ID is: {orderSuccessObject.id}</Form.Text>
        <hr></hr>
        <Alert.Heading>Order Details</Alert.Heading>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Delivery Address</th>
              <th>Pizza</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderSuccessObject.id}</td>
              <td>{orderSuccessObject.deliveryAddress}</td>
              <td>{orderSuccessObject.pizza}</td>
              <td>{orderSuccessObject.quantity}</td>
            </tr>
          </tbody>
        </Table> 
        <hr></hr>
        <Form.Text>We will contact you using {orderSuccessObject.phoneNumber} once the delivery arrives at the delivery destination.</Form.Text>
      </Alert>
    </div>
  )
}

export default OrderSuccess