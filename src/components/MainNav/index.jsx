import React from 'react';
import {Navbar, Nav,  NavDropdown} from 'react-bootstrap';
import logo from '../../assets/images/logo_814x166.png';
import './styles.scss';

const MainNav = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">
              <img src={logo} alt="" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/we-sale">We Sale</Nav.Link>
                  <Nav.Link href="/we-buy">We Buy</Nav.Link>
                  <Nav.Link href="/process">Process</Nav.Link>
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <NavDropdown.Divider style={{borderTop: '1px solid #49535d'}}/>
                  <a href="tel:+14389799720" style={{color: 'rgba(255,255,255,.5)'}}>+1 (438) 979-9720</a>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
};

export default MainNav;
