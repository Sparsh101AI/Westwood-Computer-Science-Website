import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import SocialFollow from "../SocialFollow";
import "./styles.css";

function Home(){

  return(
      
<div>


<Container fluid>
<Navbar className="footer-color" sticky="bottom"  variant="dark">
 
  <Row>


  <CardGroup>
 



  <Card className="card1" >
    
    <Card.Body>
      <Card.Text>
        <br/>
      Westwood Community High School
<br/>
221 Tundra Drive
<br/>
Fort McMurray, Alberta, T9H 2Z7
<br/>
Phone: 780-791-1986
      </Card.Text>
    </Card.Body>
  
  </Card>


 
  
</CardGroup>

    
  </Row>



  </Navbar>
</Container>









</div>
      





  )


}

export default Home;