import React from "react"

import logo from "../Assets/images/logo.svg"
import hamburger from "../Assets/images/icon-hamburger.svg"

function NavBar(){
    return(
        <nav id="main-nav">
            <img src={logo} alt="logo" />
            <img className="mobile-icon" src={hamburger} alt="menu icon" />
            <div className="link-container">
                <span>About</span>
                <span>Discover</span>
                <span>Get Started</span>
            </div>
        </nav>
    )
}

export default NavBar;