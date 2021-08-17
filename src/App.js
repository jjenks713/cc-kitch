import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Container, Nav, ListGroup, Carousel, Row, Col, Toast, Button, ToastContainer } from 'react-bootstrap'
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
  const [showA, setShowA] = useState(true);
  const [position] = useState('bottom-end');
  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="App">
      <header className="App-header">
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Charlees Comfort Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Menu</Nav.Link>
              <Nav.Link href="#pricing">Catering</Nav.Link>
              <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSdXKYFtcBoqubnyrzsC944gC4-mrRqRx1bypos8qILn08BoWg/viewform?usp=sf_link">Join are mailing list</Nav.Link>
{/*               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <ListGroup horizontal>
                  <ListGroup.Item><a href="https://www.facebook.com/octobitmusic" class="fa fa-facebook" target="_blank" alt="Facebook"></a></ListGroup.Item>
                  <ListGroup.Item><a href="https://twitter.com/octobitmusic" class="fa fa-twitter" target="_blank" alt="Twiter"></a></ListGroup.Item>
                  <ListGroup.Item><a href="https://www.instagram.com/octobitmusic/" class="fa fa-instagram" target="_blank" alt="Instagram"></a></ListGroup.Item>
                </ListGroup>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      </header>
      
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              id="car-image"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/767033.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              id="car-image"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/767033.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="car-image"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/767033.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
      <footer>
        <Container>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
            </Nav>
            <div class="footer-fa">
              <ListGroup horizontal>
                <ListGroup.Item><a href="https://www.facebook.com/octobitmusic" class="fa fa-facebook" target="_blank" alt="Facebook"></a></ListGroup.Item>
                <ListGroup.Item><a href="https://twitter.com/octobitmusic" class="fa fa-twitter" target="_blank" alt="Twiter"></a></ListGroup.Item>
                <ListGroup.Item><a href="https://www.instagram.com/octobitmusic/" class="fa fa-instagram" target="_blank" alt="Instagram"></a></ListGroup.Item>
              </ListGroup>
            </div>
        </Container>
      </footer>

      {/* adding toast on load page */}
            <ToastContainer show={showA} onClose={toggleShowA} position={position}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body><a href="https://docs.google.com/forms/d/e/1FAIpQLSdXKYFtcBoqubnyrzsC944gC4-mrRqRx1bypos8qILn08BoWg/viewform?usp=sf_link" target="_blank">Hello, stay up to date by joing our email list</a></Toast.Body>
            </ToastContainer>
  
    </div>
  );
}

export default App;
