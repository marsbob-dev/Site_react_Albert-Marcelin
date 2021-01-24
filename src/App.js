import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap";
import Home from "./modules/pages/Home";
import Test from "./modules/pages/Test";
import React, { Fragment } from "react";
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
      <Route path="/test">
        <Test />
      </Route>
     <Route path="/">
       <Home />
     </Route>
    </Switch>
    </div>
</Router>

    // <Fragment>
    //   <Router>
    //     <div>
    //       <Header />
    //       <Switch>
    //         <Route path="/test">
    //           <Test />
    //         </Route>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // </Fragment>
  )
}

export default App;
