import React from 'react'

import './style.css'
import { Container, Button, Navbar } from 'react-bootstrap';


function MyNavBar() {
  return (
    <div>
      <Navbar sticky="top" expand="lg" bg="black" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
           
          </Navbar.Brand>
          <div className="button-container">
            <Button href="/About" variant="outline-light">About</Button>
            <Button href="/Projects" variant="outline-light">Projects</Button>
            <Button href="/Resume" variant="outline-light"> Resume</Button>
            <Button href="/Contact" variant="outline-light"> Contact</Button>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavBar;