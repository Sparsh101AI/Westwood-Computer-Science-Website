import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Awards from './Awards/Awards';
import About from './About/About';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">



<Navbar/>

      <Router>
      
     <Route exact path ='/' component={Home}/>
     <Route path ='/About' component={About}/>
 </Router>


<Footer/>
    </div>
  );
}

export default App;
