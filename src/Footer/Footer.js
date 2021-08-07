import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'


function Home(){

  return(
      
<div>


<Container fluid>
<Navbar className="footer-color" fixed="bottom"  variant="dark">
 
  <Row>


  <CardGroup>
 
 
  <Card className="card1">
    
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

  <Card className="card2">
    
    <Card.Body>
      <Card.Text>
        <br/>
        <br/>
      ©tabs add more later
      </Card.Text>
    </Card.Body>
  
  </Card>


  <Card className="card2">
    
    <Card.Body>
      <Card.Text>
        <br/>
        <br/>
      ©Westwood Computer Science
      </Card.Text>
    </Card.Body>
  
  </Card>
 
 
  <Card>
    <Card.Img variant="top" src="wwlogo.png"  height="150"/>
  </Card>

  <Card className="card3">
    
    <Card.Body>
      <Card.Text>
       
        additional content. This card has even longer content than the first to
        show that equal height action.
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