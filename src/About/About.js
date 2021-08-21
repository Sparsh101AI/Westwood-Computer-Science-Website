import './About.css';
import Card from 'react-bootstrap/Card'

function About() {
    return (
      <div className="About">

westwood About page
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
  
  export default About;