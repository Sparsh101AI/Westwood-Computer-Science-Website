import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Typical from 'react-typical';






function bar() {
    return (
      
      
      
      
      <div className="bar">
 
 {/*top navbar */}
 <Navbar bg="light" >
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="capture.png"
          width="170"
          height="70"
          className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
         <Navbar.Toggle />
     <Navbar.Collapse className="justify-content-end">
      </Navbar.Collapse>
    </Container>
  </Navbar>

 {/*middle navbar */}

  <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
    
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="auto">
     
     
   
    <Button className="button-color"   href="/About">About</Button>      
    <Button className="button-color" href="/ComputerScience">Computer Science</Button> 
    <Button className="button-color" href="/Robotics">Robotics</Button> 
    <Button className="button-color" href="/DigitalDesign">Digital Design</Button> 
    <Button className="button-color" href="/Awards">Achievements
</Button> 

    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>



 {/*bottom navbar */}


<Navbar className="midbar">
<p className="navtex"> Welcome To: {' '}

<Typical
  loop={Infinity}
  wrapper="b"
  steps={
    [
      'Innovation',
      1400,
      'Creativity',
      1400,
      'Our Community',
      1400,
      'Westwood!',
      1400,
    ]
  }
/>
</p>
</Navbar>
      </div>
    );
  }
  
  export default bar;