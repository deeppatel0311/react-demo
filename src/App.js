import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';

import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <>
    
    <Router>
    <Navbar />  
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/text-utility" element={<TextFrom />}>
        </Route>
        {/* <Route path="/">
          <Home /> 
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
