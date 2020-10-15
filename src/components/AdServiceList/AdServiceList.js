import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Data from '../Data/Data';
import './AdServiceList.css';


const AdServiceList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div class="order" className="services-container mt-5">
            <div style={{display:"flex", height:"80px"}} class="or">
                <Navbar.Brand className="logo" href="/home"><img src={logo} alt=""/></Navbar.Brand>
                <h2>Service List</h2>
                <p>{loggedInUser.name}</p>
            </div>
            
            <div>
                <div className="col-md-2" class="list">
                        <a href="/adServiceList">Service List</a>
                        <a style={{display:"flex"}} href="/addService">Add Service</a>
                        <a href="/makeAdmin">Make Admin</a>
                </div>
                <div class="adminData" >
                    <Data></Data>
                </div>
            </div>
        </div>
    );
};

export default AdServiceList;