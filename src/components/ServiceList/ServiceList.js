import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import "./ServiceList.css";
import web from '../../images/icons/web.png';

const ServiceList = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderData, setOrderData] = useState([]);


    // useEffect(() => {
    //     fetch('https://shrouded-plateau-85923.herokuapp.com/orders?email='+loggedInUser.email)
    //     .then(res => res.json())
    //     .then(data => setOrderData(data));
    // }, []);

    
    useEffect(() => {
        fetch('https://shrouded-plateau-85923.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrderData(data));
    }, []);



    return (
        <div class="order"  className="services-container mt-5">
            <div style={{display:"flex", height:"80px"}} class="or">
                <Navbar.Brand className="logo" href="/home"><img src={logo} alt=""/></Navbar.Brand>
                <h2>Service List</h2>
                <p>{loggedInUser.name}</p>
            </div>
            {/* <p>{loggedInUser.name}</p> */}
            <div >
                <div className="col-md-2" class="list" >
                        <a href="/order">Order</a>
                        <a style={{display:"flex"}} href="/serviceList">Service List</a>
                        <a href="/review">Review</a>
                </div>
                
                <div className="d-flex justify-content-center" >
                    <div className="w-75 row mt-2 pt-2">
                        {
                            orderData.map(od => 
                                <div className="col-md-5 text-center  orderLi">
                                    <img style={{height:'50px'}} src={web} alt=""/>
                                    <h5 className="mt-3 mb-3">{od.graphicDesign}</h5>
                                    <p className="text-secondary">{od.projectDetails}</p>
                                    <p className="text-secondary">{od.price}</p>
                                </div>
                            )                   
                        }
                    </div>
                </div>





                {/* <div className="row" class="serviceList">
                   
                    {
                        orderData.map(od => 
                        
                                // <div className="col-md-4 text-center" class="dat" style={{display:"flex"}}>
                                //     <h5 >{od.graphicDesign}<br/><br/>{od.projectDetails}<br/>{od.price}</h5>
                                // </div>
                                <div >

                            <div  className="personalEvent" style={{display:"flex"}}>

                                <div  className="dataField">
                                   
                                    <h5>{od.graphicDesign} <br/><br/>{od.price}</h5>
                                    <p>{od.projectDetails}</p>
                                    
                                </div>

                            </div>
                            
                        </div>
                              
                            // className="col-md-2"
                        )
                    }

                </div> */}
            </div>
        </div>
    );
};

export default ServiceList;