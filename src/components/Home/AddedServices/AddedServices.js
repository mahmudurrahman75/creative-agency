import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../../images/icons/graphic.png';



const AddedServices = () => {


    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrderData(data));
    }, []);



    return (
        <section className="services-container mt-5" style={{height:"400px"}}>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        orderData.map(service => 
                            <div className="col-md-4 text-center serviceBd">
                                <Link to="/order">
                                    <img style={{height:'50px'}} src={graphic} alt=""/>
                                    <h5 className="mt-3 mb-3">{service.title}</h5>
                                    <p className="text-secondary">{service.enter}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

                

        </section>
    );
};

export default AddedServices;