import './Home.css';
import  video from './video'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ReactPlayer from 'react-player'
import CardGroup from 'react-bootstrap/CardGroup'


function Home() {
    return (
      <div className="Home">



<Container>
  <Row>
    <Col sm={8}>
      
    <Carousel className="cards3">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="wwlogo.png"      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="wwlogo.png"
      alt="Second slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="wwlogo.png"      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>











    </Col>
    {''}
    <Col sm={4}>sm=4</Col>
  </Row>










<Row>

  
        


  <Col className="videopart" xl={5}>
  <Card >
  <Card.Body>
    <Card.Title>Meet Our Teachers</Card.Title>
    <Card.Text>
    <CardGroup>
 
 <Card>
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This card has supporting text below as a natural lead-in to additional
       content.{' '}
     </Card.Text>
   </Card.Body>
   
 </Card>
 <Card>
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>
  
 </Card>
</CardGroup>
    </Card.Text>
  </Card.Body>
</Card>

  

  </Col>


{/*This is westwood centre video */}

  <Col className="videopart1" xl={5}>
  <Card >
  <Card.Body>
    <Card.Title>Check Out Our New Innovation Center</Card.Title>
    <Card.Text>
    <CardGroup>
 
 <Card>
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This card has supporting text below as a natural lead-in to additional
       content.{' '}
     </Card.Text>
   </Card.Body>
   
 </Card>
 <Card>
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>
  
 </Card>
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
  
  export default Home;