import React from 'react'
import {Alert, Table} from 'react-bootstrap'

const ContactSuccess = ({ contactSuccessObject }) => {
  return (
    <div class="m-4">
      <Alert variant ="success">
        <Alert.Heading>Thank you for contacting us!</Alert.Heading>
        <p>Hello, {contactSuccessObject.name}! Thank you for sending us a message.</p>
        <hr></hr>
        <Alert.Heading>Message Details Details</Alert.Heading>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Message ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message Subject</th>
              <th>Message Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contactSuccessObject.id}</td>
              <td>{contactSuccessObject.name}</td>
              <td>{contactSuccessObject.email}</td>
              <td>{contactSuccessObject.subject}</td>
              <td>{contactSuccessObject.message}</td>
            </tr>
          </tbody>
        </Table> 
      </Alert>
    </div>
  )
}

export default ContactSuccess