import './seniorRobotics.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

function seniorRobotics() {
    return (
      <div className="seniorRobotics">



<Container>
  <Row>
  <Card >
    <Card.Body >
      <Card.Text className="seniortitle">
       News And Photos About Senior High Robotics!
      </Card.Text>
    </Card.Body>
  </Card>
    
  </Row>
<br/>

 

  <Row>

  <CardGroup>
 
  <Card>
    <Card.Img variant="top" src="wwprovs.png" />
    <Card.Body>
      <Card.Title>Westwood Robotics team heads to Provincial championship in Calgary!</Card.Title>
      <Card.Text>
          <br/>
          
      <Button variant="secondary" size="lg" href="">To Be Added!</Button> 

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Date: March 6, 2020 </small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="roboworlds.png" />
    <Card.Body>
      <Card.Title>Westwood Robotics team heads to world championships!</Card.Title>
      <Card.Text>
      As the first team to take home a provincial championship title in the 25-year history of the school, 
      the Westwood Community High School robotics team is gearing up to represent Alberta at
       the 2013 VEX Robotics High School World Championship in Anaheim, Ca. April 17 to 20.
      </Card.Text>

    
      <p>
              <a href="https://www.fortmcmurraytoday.com/2013/04/04/local-robotics-team-heads-to-world-championships">Click For Full Article</a>
            </p>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Date: April 4, 2013  </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      To Be Added
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>




  </Row>
  
 
</Container>
<br/>








      </div>
    );
  }
  
  export default seniorRobotics;