import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap";
import Home from "./modules/pages/Home";
import Contact from "./modules/pages/Contact";
import React, { Fragment } from "react";
import Footer from "./modules/footer/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Header from "./modules/header/Header"

function App() {
  return (
<Router>
  <div>
    <Header />
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
     <Route path="/">
       <Home />
     </Route>
    </Switch>
    <Footer />
    </div>
</Router>
  )
}
export default App

