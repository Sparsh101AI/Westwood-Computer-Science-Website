import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SocialFollow from "../SocialFollow";
import "./styles.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPagePro = () => {
  return (
    
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      
      
      <div style={{ backgroundColor: "#27206B" }}>
       
      </div>
     
      
      

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        
        
        <MDBRow className="mt-3">


        <MDBCol md="4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-envelope mr-3" /> Westwood Community High School

            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> 221 Tundra Drive
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> Fort McMurray, Alberta, T9H 2Z7
            </p>
            <p>
              <i className="fa fa-print mr-3" /> Phone: 780-791-1986
            </p>
          </MDBCol>


          <MDBCol md="4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
         
          <MDBCol md="4">
        
           
            
           <SocialFollow/>
           <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "200px" }} />
 <div>
 
© 2021 Copyright: Westwood Innovation Center
 </div>
         
          </MDBCol>
          
        </MDBRow>
  
      </MDBContainer>
      


          <div className="text-center">
        
      </div>
         
        </MDBContainer>
      </div>

      
    </MDBFooter>
  );
}

export default FooterPagePro;