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
     
    <Button className="button-color" href="#">About</Button> 
    <Button className="button-color" href="#">CS Junior High</Button> 
    <Button className="button-color" href="#">CS Senior High</Button> 
    <Button className="button-color" href="#">Robotics Program</Button> 
    <Button className="button-color" href="#">Awards and Achievements
</Button> 


    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>













      </div>
    );
  }
  
  export default bar;