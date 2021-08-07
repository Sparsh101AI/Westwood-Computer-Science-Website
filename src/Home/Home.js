import './Home.css';
import Card from 'react-bootstrap/Card'

function Home() {
    return (
      <div className="Home">

westwood home page
<Card >
  <Card.Img variant="top" src="wwlogo.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

  </Card.Body>
</Card>

      </div>
    );
  }
  
  export default Home;