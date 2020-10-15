import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTrail, animated } from 'react-spring'
const items = ['Click Your Service']
const config = { mass: 5, tension: 2000, friction: 200 }


const ServicesBody = ({service}) => {


    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })



    return (
        
        <div className="col-md-4 text-center serviceBd">
            <Link to="/order">
                <img style={{height:'50px'}} src={service.img} alt=""/>
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, assumenda.</p>

                <div className="trails-main" onClick={() => set(state => !state)}>
                        <div>
                                    {trail.map(({ x, height, ...rest }, index) => (
                                    <animated.div
                                        key={items[index]}
                                        className="trails-text"
                                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                        <animated.div style={{ height }} style={{color:"orange", fontSize:"17px"}}>{items[index]}</animated.div>
                                    </animated.div>
                                ))}
                        </div>
                </div>

            </Link>
        </div>
    );
};

export default ServicesBody;