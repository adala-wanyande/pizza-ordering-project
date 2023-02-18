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
    <div>
    <Card style={{ width: '18rem', margin: '20px', height: '350px' }} key={menuItem.id}>
      <Card.Img variant="top" width="200" height="200" src={require(`../images/${menuItem.image}`)} />
      <Card.Body>
        <Card.Title>{menuItem.name}</Card.Title>
        <Card.Text style={{ height: '40px' }}>
          {menuItem.description}
        </Card.Text>
        <Badge bg="secondary">Ksh {menuItem.price}</Badge>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MenuItem