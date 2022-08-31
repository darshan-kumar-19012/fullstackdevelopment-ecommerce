import React from "react";
import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
class Navbar extends React.Component{
    handleClick(){
        window.open("http://localhost:3001/");
    }
    render(){
        return (
            <>
            <div className="header-nav">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Account">Account</Link></li>
            <li><Link to="/About">About</Link></li>
            </ul>
            </div> 
            <Outlet/>
            </>
        );
    }
    
}
export default Navbar;