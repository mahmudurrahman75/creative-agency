import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';
import client from '../../../images/client.png';

import { useTrail, animated } from 'react-spring'
const items = ['WellCome For Feedback']
const config = { mass: 5, tension: 2000, friction: 200 }




const Feedback = () => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrderData(data));
    }, []);



    const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })



    return (

        <section className="services-container mt-5" style={{height:"500px"}}>
            <div className="text-center">
                <h2  style={{color: '#2D2D2D'}}>Clients <span style={{color:"#7AB259"}}>Feedback</span></h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        orderData.map(service => 
                            <div className="col-md-4 text-center serviceBd">
                                    <img style={{height:'50px'}} src={client} alt=""/>
                                    <h3 className="mt-3 mb-3">{service.clientName}</h3>
                                    <h5 style={{color:"goldenrod"}} className="mt-3 mb-3">{service.company}</h5>
                                    <p className="text-secondary">{service.description}</p>

                                    <div className="trails-main" onClick={() => set(state => !state)}>
                                        <div>
                                            {trail.map(({ x, height, ...rest }, index) => (
                                            <animated.div
                                                key={items[index]}
                                                className="trails-text"
                                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                                <animated.div style={{ height }} style={{color:"green", fontSize:"20px"}}>{items[index]}</animated.div>
                                            </animated.div>
                                            ))}
                                        </div>
                                    </div>

                            </div>
                        )
                    }
                    
                </div>
                
            </div>

        </section>

    );
};

export default Feedback;