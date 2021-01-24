import {
    BrowserRouter as Link,
  } from "react-router-dom";
function Navbar() {
    return (
        <div className="row p-2 bg-header w-100 m-0" id="fixedNav">
            <div className="col-5 container-fluid m-0 justify-content-evenly d-flex align-items-center">
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>                
            </div>
            <div className="col-2 m-0">
                <div className="row text-center">
                    <Link to="/">
                        <img className="logoHeader" src="./logo.png" alt=""/>
                    </Link>
                </div>
            </div>
            <div className="col-5 container-fluid m-0 justify-content-evenly d-flex align-items-center">
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>
                <li className=""> 
                    <a className ="fa-2x" href="">Placeholder</a>
                </li>                
            </div>
        </div>
        

    );
  }
  
  export default Navbar;