import './Home.css';
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
    <Col >
      
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



<br/>






<Row>

  
        


  <Col  xl={6}>
  <Card className="videopart" >
  <Card.Body>
    <Card.Title className="videopart">Meet Our Teachers</Card.Title>
    <Card.Text>
    <CardGroup>
 
 <Card className="teacherpart1and2">
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Said El Medjdani</Card.Title>
     <Card.Text>
     "As a life-long learner, I believe that students grow up with challenges, computational thinking,
      problem solving and product-oriented learning. As a father of three, one of my greatest passions in life
       is to see kids grow and learn."{' '}
     </Card.Text>
   </Card.Body>
   
 </Card>
 <Card className="teacherpart1and2">
   <Card.Img variant="top" src="saidheadimg.png" />
   <Card.Body>
     <Card.Title>Jeff Landry</Card.Title>
     <Card.Text>
       "This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action."
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

<Row>
  {/*This is westwood centre video */}
<Container>
  <Col className="videopart1" >
   
  <Card className="videopart1" className="text-center">
  <Card.Body>
    <Card.Title className="textcenter">Check Out Our New Innovation Center!</Card.Title>
    <Card.Text>
    <CardGroup>
 


<div className="App1">
  <ReactPlayer url='https://www.youtube.com/watch?v=rn6GImDNNrk&feature=emb_title'/>
</div>
 
</CardGroup>
    </Card.Text>
  </Card.Body>
</Card>

  

  </Col>



  

  </Container>

{/*This is westwood centre video ending */}



</Row>






<br/>



</Container>









      </div>
    );
  }
  
  export default Home;