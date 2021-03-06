import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Awards from './Awards/Awards';
import ComputerScience from './ComputerScience/ComputerScience';
import Robotics from './Robotics/Robotics';
import About from './About/About';
import Footer from './Footer/Footer';
import DigitalDesign from './DigitalDesign/DigitalDesign';
import seniorRobotics from './Robotics/seniorRobotics';
import seniorRoboticsCalgary2020 from './Robotics/seniorRoboticsCalgary2020';

function App() {
  return (
    <div className="App">



<Navbar/>

      <Router>
      
     <Route exact path ='/' component={Home}/>
     <Route path ='/About' component={About}/>
     <Route path ='/ComputerScience' component={ComputerScience}/>
     
     <Route path ='/Robotics' component={Robotics}/>
     <Route path ='/seniorRobotics' component={seniorRobotics}/>
     <Route path ='/seniorRoboticsCalgary2020' component={seniorRoboticsCalgary2020}/>

     <Route path ='/DigitalDesign' component={DigitalDesign}/>
     <Route path ='/Awards' component={Awards}/>

 </Router>



<Footer/>
    </div>
  );
}

export default App;
