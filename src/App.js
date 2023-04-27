import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About   from "./components/About";
import  Projects from './components/Projects'
import  Home  from './components/Home';
import Contact from "./components/Contact";


function App() {
  return ( 
    <Router>
      <div className="App">
        <Nav /> 
 
        <div className="content">
        
        <Routes> <Route  path="/" element={<Home></Home>} />  
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/contact" element={<Contact></Contact>} />
       </Routes>
        </div>
       
      </div>
    </Router>
  );
}




export default App;
