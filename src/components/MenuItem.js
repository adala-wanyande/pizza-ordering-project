import React from 'react'
import { Badge, Card } from 'react-bootstrap';

// Dummy prop of menu item
const menuItemProp = {
  "id": 1,
  "name": "Hawaiian",
  "description": "Macon - Pineapple",
  "price": 1200,
  "image": "hawaiian.jpg"
}

const MenuItem = ({menuItem = menuItemProp}) => {
  return (
    <Card style={{ width: '18rem' }} key={menuItem.id}>
      <Card.Img variant="top" width="200" height="200" src={require(`../images/${menuItem.image}`)} />
      <Card.Body>
        <Card.Title>{menuItem.name}</Card.Title>
        <Card.Text>
          {menuItem.description}
        </Card.Text>
        <Badge bg="success">{menuItem.price}</Badge>
      </Card.Body>
    </Card>
  )
}

export default MenuItem