import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

// Dummy prop
const activeProp = "Home"

const NavigationBar = ({active = activeProp}) => {
  if (active === "Home") {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rose's Gourmet Pizza</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
              About Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
              Our Menu
            </NavLink>
          </Nav>
        </Container>
        <NavLink className="order-button p-2 rounded" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
      </Navbar>
  )
  }

  else if (active === "About") {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rose's Gourmet Pizza</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/about">
              About Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
              Our Menu
            </NavLink>
          </Nav>
        </Container>
        <NavLink className="order-button p-2 rounded" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
      </Navbar>
  )
  }

  else if (active === "Contact") {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Rose's Gourmet Pizza</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/">
                Home
              </NavLink>
              <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
                About Us
              </NavLink>
              <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/menu">
                Our Menu
              </NavLink>
            </Nav>
          </Container>
          <NavLink className="order-button p-2 rounded" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
        </Navbar>
      )
  }

  else if (active === "Menu") {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rose's Gourmet Pizza</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
              About Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px' }} to="/menu">
              Our Menu
            </NavLink>
          </Nav>
        </Container>
        <NavLink className="order-button p-2 rounded" style={{ color: 'black', textDecoration: 'inherit'}} to="/order">Order Online</NavLink>
      </Navbar>
    )
  }

  else  {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rose's Gourmet Pizza</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit' }} to="/about">
              About Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="mx-2" style={{ color: 'white', textDecoration: 'inherit'}} to="/menu">
              Our Menu
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
}

export default NavigationBar