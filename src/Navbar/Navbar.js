import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function bar() {
    return (
      <div className="bar">
  <Navbar className="nav-colortop" >

      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/mlogo.png"
          width="70"
          height="70"
         
        />{' '}
     Header
      </Navbar.Brand>
  </Navbar>


  <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
    
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    <Button className="button-color" href="#">Features</Button> 
    <Button className="button-color" href="#">Features</Button> 
    
    <Dropdown >
    <Dropdown.Toggle className="button-color" >
      Awards
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>













      </div>
    );
  }
  
  export default bar;