import './ComputerScience.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'

function ComputerScience() {
    return (
      <div className="ComputerScience">
<Container>


<Row>
    <Col>
    
  


    <Carousel>
  <Carousel.Item>
  <Carousel.Caption>
      <h3 className="imagetext1">Welcome To Westwood Computer Science!</h3>
      
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="compsci.png"
      alt="First slide"
    />
    
  </Carousel.Item>
 
</Carousel>

<br/>








    
    </Col>
    
  </Row>
  <br/>
<Row>




<CardGroup>
  
  <Card className="cardcomp">
    <Card.Img variant="top" src="juniorcomp.png" />
    <Card.Body>
      <Card.Title className="videopart">Computer Science 
Junior High</Card.Title>
      <Card.Text className="compscitext">
      In our introductory course to Computer Science in Junior High students will learn the 
      basics of Computer Programming. The class will cover the concept of functions and recursion and
       teach students how to use Python libraries, algorithms and computing, and basic data structures
        (lists).  Finally, students will learn about WebVR, Virtual reality and be introduced to how to create iPhone Applications


{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>


  <br/>



  <Card className="cardcomp">
    <Card.Img variant="top" src="seniorcomp.png" />
    <Card.Body>
      <Card.Title className="videopart">Computer Science 
Senior High</Card.Title>
      <Card.Text className="compscitext">
      The major theme of the course is computational thinking and problem solving.

The following goals apply to all three levels of Computer Science at the Senior High Level. 

Students will learn to:
<br/>
• design, implement, and analyze solutions to problems.
<br/>
• use and implement commonly used algorithms.
<br/>
• use standard data structures.
<br/>
• develop and select appropriate algorithms and data structures to solve new problems.
<br/>
• write solutions fluently in an object-oriented paradigm.
<br/>
• write, run, test, and debug solutions in different programming languages.
<br/>

      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>





</Row>
<br/>



<Row>
<Card className="option2"> 

    <Card.Body>
      <Card.Title className="option2">What We Offer In Computer Science!</Card.Title>
     
    </Card.Body>
    </Card>
</Row>


<Row>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="vrr.png" />
    <Card.Body>
      <Card.Title className="option3">Virtual Reality</Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="coding.png" />
    <Card.Body>
      <Card.Title className="option3">Programming</Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="design.png" />
    <Card.Body>
      <Card.Title className="option3">3D Printing And Design </Card.Title>
     
    </Card.Body>
    
  </Card>
</CardGroup>



</Row>
<br/>

<Row>
<Row>
<Card className="option2"> 

    <Card.Body>
      <Card.Title className="option2">Outstanding Achievements!</Card.Title>
     
    </Card.Body>
    </Card>
</Row>

<CardGroup>
  <Card className="videopart">
    <Card.Img variant="top" src="ccc.png" />
    <Card.Body>
      <Card.Title> Waterloo Coding Competition! 2021</Card.Title>
      <Card.Text>
      The Canadian Computing Competition (CCC) is a fun challenge for secondary school students with an interest in
       programming. It is an opportunity for students to test their ability in designing, understanding and completing
        algorithms. Congratulations to our Westwood coders on receiving Distinction Awards
         in the 2021 University of Waterloo Competition! 
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="videopart">
    <Card.Img variant="top" src="three.png" />
    <Card.Body>
      <Card.Title>
      Waterloo Coding Competition! 2020</Card.Title>
      <Card.Text>
       Congratulations to Saptarshi Bhattacherya, Priyank Dave and Krish Shah on receiving Distinction Awards
         in the 2020 University of Waterloo Competition!{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="videopart">
    <Card.Img variant="top" src="saidimg1.png" />
    <Card.Body>
      <Card.Title>Excellence in Teaching 2019
</Card.Title>
      <Card.Text>
      Congratulations to Mr. Said on winning the Prime Minister's Excellence in Teaching Award in 2019. 
 

Mr. Said teaches all of Westwood's Computer Science courses from grade seven to twelve, and runs the after school computer coding clubs.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>











</Row>

<br/>
<Row>
<Card className="option2"> 

<Card.Body>
  <Card.Title className="option2">Youth Organizations</Card.Title>
 
</Card.Body>
</Card>
</Row>

<Row>





<CardGroup>
  
  <Card>
    <Card.Img variant="top" src="quic.png" />
    <Card.Body>
      <Card.Title className="option3">Queens in Code</Card.Title>
      <Card.Text className="option0">
      QIC in a student led group at Westwood that encourages and integrates girls 
      in STEM (Science, Technology, Engineering and Math) field at a young age. 
      The groups is open to students in 7-12 and works to bridge the gap between 
      girls and STEM and apply to real-world careers. The group meets weekly after 
      school, hosts workshops, and senior student leaders in Computer Science introduce 
      Python and Java to our Junior High students. Follow the Queens in Code @queensincode on Twitter.{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="yc.png" />
    <Card.Body>
      <Card.Title className="option3">Youth Computing</Card.Title>
      <Card.Text className="option0">
      YouthComputing is a non-profit organization committed to sparking a feeling of awe,
       action, and support in youth by connecting them with the tech world. 
       We want to bring emerging technologies to youth and ensure that they feel
        supported when working in the tech world. We also want to ensure that youth
         are updated with industry level knowledge and are able to apply their skills outside of a classroom.
      </Card.Text>
      <p className="option0">
              <a href="https://youthcomputing.ca/">Youth Computing Main Website</a>
            </p>
    </Card.Body>
   
  </Card>
</CardGroup>







</Row>
<br/>

</Container>

      </div>
    );
  }
  
  export default ComputerScience;