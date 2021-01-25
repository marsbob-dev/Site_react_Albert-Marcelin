import './footer.css'
import React from "react";

function Footer() {
    return (
        <div className="row mx-0" id="Footer">
            <div className="col-12">
                <div className="row justify-content-evenly d-flex align-items-center marginTB">
                    <li className="w-25 mx-5 text-center">
                    <a href="https://www.facebook.com/" className="textColor">Facebook</a>
                    </li>
                    <li className="w-25 mx-5 text-center ">
                    <a href="https://www.instagram.com/" className="textColor">Instagram</a>
                    </li>
                    <li className="w-25 mx-5 text-center ">
                    <a href="https://github.com/" className="textColor">GitHub</a>
                    </li>
                        
                </div>
                <div className="row text-center text-white d-flex align-self-end marginCustom">
                    <span>Copyright Albert&Marcelin // Coding15 // MolenGeek</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;