import './About.css';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ReactPlayer from 'react-player'
import CardGroup from 'react-bootstrap/CardGroup'


function About() {
    return (
      <div className="About">
<br/>
<Container>
  <Row>

      
    <Col lg="6">
    <Card className="wwimagelogo">
    <Card.Img variant="top" src="main1.png" />
    </Card>
    </Col>

    <Col lg="6"> 
  
    <Card className="cardabout">
  <Card.Body>
      <br/>
    <Card.Title className="infoabout" >Welcome To Westwood Innovation's Main Website!</Card.Title>
    <Card.Text className="infoabout1">
    This website is created For anyone interested in exploring Westwood's Innovation Center where various techonolgoies and competitions are tackled.
    These include:
    <br/>

<br/>
-Junior High Computer Science

<br/>
-Robotics
<br/>
-3D Printing  & Virtual Reality
<br/>
-Multimedia Technology (ESports)
<br/>
-Digital Design & Digital Art
<br/>
-Waterloo Coding & Math Competitions
<br/>
-Hakathon & After School Coding Club
<br/>
-Queens in Code

<br/>
-Youth Computing
<br/>
-ICT Internships
<br/>
-International Machine Learning
<br/>
-Science Fairs (Regional and National)
     <br/>

  
    </Card.Text>

  </Card.Body>
</Card>
    </Col>
  </Row>
  

<Row>

<Col className="videopart1" >
   
  <Card className="videopart1" className="text-center">
  <Card.Body>
    <Card.Title className="textcenter">What We Do Here At The Innovation Center!</Card.Title>
    <Card.Text>
    <CardGroup>
 


<div className="App1">
  <ReactPlayer url='https://www.youtube.com/watch?v=ZhRWTLXP5-M'/>
</div>
 
</CardGroup>
    </Card.Text>
  </Card.Body>
</Card>


  

  </Col>




</Row>
<br/>











</Container>
      </div>
    );
  }
  
  export default About;