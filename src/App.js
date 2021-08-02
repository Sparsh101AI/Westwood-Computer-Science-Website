import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Awards from './Awards/Awards';

function App() {
  return (
    <div className="App">



<Navbar/>

      <Router>
      
      <Route path="/" exact component={Home} />
      <Route path="/Awards" exact component={Awards}/>


    </Router>
    </div>
  );
}

export default App;
