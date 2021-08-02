import './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function bar() {
    return (
      <div className="bar">
  <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo512.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
     Westwood
      </Navbar.Brand>
  
    
  </Navbar>

      </div>
    );
  }
  
  export default bar;