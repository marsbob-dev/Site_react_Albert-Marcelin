import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div className="row p-2 bg-header w-100 m-0" id="fixedNav">
            <div className="col-5 container-fluid m-0 justify-content-evenly d-flex align-items-center">
                   <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
                   <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
                   <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
           </div>
            <div className="col-2 m-0">
                <div className="row text-center">
                    <li>
                    <Link to="/home">
                        <img className="logoHeader" src="./logo.png" alt=""/>
                    </Link>
                    </li>
                </div>
            </div>
            <div className="col-5 container-fluid m-0 justify-content-evenly d-flex align-items-center">
                    <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
                    <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
                    <a className ="fa-2x text-dark headerA" href="">Placeholder</a>
            </div>
        </div>
        

    );
  }
  
  export default Navbar;
