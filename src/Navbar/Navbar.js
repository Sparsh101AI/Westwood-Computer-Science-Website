import './Navbar.css';
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
          src="/mlogo.png"
          width="70"
          height="70"
         
        />{' '}
     Header
      </Navbar.Brand>
  
    
  </Navbar>

      </div>
    );
  }
  
  export default bar;