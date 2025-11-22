import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Layout from "./componants/Layout";
import Home from "./componants/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
 

  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" index element = {<Home />} />
        <Route path="/login"  element = {<Login />} />
        <Route path="/register"  element = {<Register />} />
      </Routes>
      
        
    </Router>
  )
}

export default App
