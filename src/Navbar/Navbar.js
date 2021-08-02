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
          width="45.6"
          height="45.6"
         
        />{' '}
     Westwood
      </Navbar.Brand>
  
    
  </Navbar>

      </div>
    );
  }
  
  export default bar;