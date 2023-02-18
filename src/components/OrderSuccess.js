import React from 'react'
import {Alert, Table} from 'react-bootstrap'

const orderSuccessProp = {
  "id": 1,
  "name": "Adala Wanyande",
  "phoneNumber": "+254712345678",
  "deliveryAddress": "Riara Valley Gardens, Riara Road",
  "pizza": "Boewors",
  "quantity": 2,
  "price": 2500
}

const OrderSuccess = ({orderSuccess = orderSuccessProp}) => {
  return (
    <div>
      <Alert variant ="success">
        <Alert.Heading>Thank you for your order!</Alert.Heading>
        <p>Hello, {orderSuccess.name}! Thank you for purchasing from our restaurant. Your order ID is: {orderSuccess.id}</p>
        <hr></hr>
        <Alert.Heading>Order Details</Alert.Heading>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Delivery Address</th>
              <th>Pizza</th>
              <th>Quantity</th>
              <th>Price (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderSuccess.id}</td>
              <td>{orderSuccess.deliveryAddress}</td>
              <td>{orderSuccess.pizza}</td>
              <td>{orderSuccess.quantity}</td>
              <td>{orderSuccess.quantity}</td>
            </tr>
          </tbody>
        </Table> 
        <hr></hr>
        <p>We will contact you using {orderSuccess.phoneNumber} once the delivery arrives at the delivery destination.</p>
      </Alert>
    </div>
  )
}

export default OrderSuccess