import React from 'react';
import "./Navbar.css";
import { Button, Form, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a className="logo" href="/home"><img src={logo} alt="" /></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Contact Us</a>
                    </li>

                    <Link to="/login"><button style={{backgroundColor:'black', color:'white'}} className="btn">Login</button></Link>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;