import './Home.css';
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
      
   

    </Col>
    
  
  </Row>



<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>





<Row>
  {/*This is westwood centre video */}
<Container>
  <Col  >
   
  <Card className="videopart1ii" className="text-center">
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