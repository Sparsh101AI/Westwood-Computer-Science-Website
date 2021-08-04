import './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function foot() {
    return (
      <div className="foot">
  <Navbar fixed="bottom" bg="dark" variant="dark">

      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/mlogo.png"
          width="70"
          height="70"
         
        />{' '}
    Footer
      </Navbar.Brand>
  
    
  </Navbar>

      </div>
    );
  }
  
  export default foot;