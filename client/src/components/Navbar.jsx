import React from "react";
import {Link} from "react-router-dom";

// Import Media
import Logo from "../images/logo-no-background.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <Link className="link" to="/">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </Link>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
