import './header.css'
import Navbar from "./Navbar";
import Banner from './Banner';
import React from "react";

function Header() {
    return (
        <div className="w-100">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
  }
  
  export default Header;