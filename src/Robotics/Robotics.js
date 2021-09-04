import './Robotics.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import ReactPlayer from 'react-player'




function Robotics() {
    return (
      <div className="Robotics">

<br/>
<Container>
  <Row>
    <Col>
    
  


    <Carousel>
  <Carousel.Item>
  <Carousel.Caption>
      <h3 className="imagetext1">Welcome To Westwood Robotics!</h3>
      
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="groupic.png"
      alt="First slide"
    />
    
  </Carousel.Item>
 
</Carousel>

<br/>








    
    </Col>
    
  </Row>
  <Row>
    <Col>


    <CardGroup>
  <Card className="cardrightrobotoics">
    <Card.Img variant="top" src="wwroboticslogo.png" />
    <Card.Body>
      <Card.Title className="cardrightrobotoicstitle"> Explore Robotics </Card.Title>
      <Card.Text className="cardrightrobotoicscontent">
      Westwood’s Robotics program includes both Skill Robotics and VEX Robotics.
<br/>
<br/>
Skills: “Due to the increasing use of robotics, companies are in growing need of professionals who
 can apply these emerging technologies in design and manufacturing of products. Professionals in the Robotics
  industry are often referred to as Robotics Engineers, and are responsible for designing, building, maintaining,
   and operating robotic technologies.” 
 <br/>
 <br/>

VEX: “The VEX Robotics Design System offers students an exciting platform for 
learning about areas rich with career opportunities spanning science, technology, engineering and math (STEM).”
      </Card.Text>
    </Card.Body>
    



  </Card>
  <Card>
    <Card.Img variant="top" src="wwjunior1.png" />
    <Card.Body>
      <Card.Title className="cardmiddlerobotoicstitle" >Junior High Robotics</Card.Title>
      <Card.Text>
      In Jr. High Robotics, students can work on a varying array of topics including 3D printing, Arduino's, Raspberry Pi's, 
       CAD T-shirt design, Sphero's, & VEX Robotics. The structure of the class had students working simultaneously 
      on each of these topics in stations so everyone will get a chance to try everything out! {' '}
      </Card.Text>
    </Card.Body>
    
  </Card>





  <Card className="cardrightrobotoics">
    <Card.Img variant="top" src="wwsenior.png" />
    <Card.Body>
      <Card.Title className="cardleftrobotoicstitle"> Senior High Robotics </Card.Title>
      <Card.Text className="cardleftrobotoicscontent">
      Westwood’s Robotics program includes both Skill Robotics and VEX Robotics.
<br/>
<br/>
Sr. Westwood Robotics will create opportunities for students to engage in planning, computational thinking, and collaborative
 problem solving through both unplugged and online activities. Students will further develop their programming skills while 
 working in groups to accomplish tasks and activities to build their knowledge with the four elements of computational thinking:
  decomposition, pattern making, abstraction and algorithms to help support coding. With our primary focus placed on VEX,
 students are given the oppertunity to create a robot designed for competition at City, Zone, and Provincial levels. 
      
      
      </Card.Text>
      <Button variant="secondary" size="lg" href="/seniorRobotics">Explore More!</Button> 

    </Card.Body>
  
  </Card>
</CardGroup>



<br/>



    </Col>


  </Row>
</Container>

  {/*This is westwood robotics video */}
  <Container>
  <Col className="videopart1" >
   
  <Card className="videopart1" className="text-center">
  <Card.Body>
    <Card.Title className="textcenter">Check Out Westwood Robotics!</Card.Title>
    <Card.Text>
    <CardGroup>
 


<div className="App1">
  <ReactPlayer url='https://www.youtube.com/watch?v=8OCDJBdy0go&feature=emb_title'/>
</div>
 
</CardGroup>
    </Card.Text>
  </Card.Body>
</Card>

  

  </Col>



  

  </Container>

{/*This is westwood robotics video ending */}

<br/>












      </div>
    );
  }
  
  export default Robotics;