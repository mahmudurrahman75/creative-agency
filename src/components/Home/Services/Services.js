import React from 'react';
import './Services.css';
import ServicesBody from '../ServicesBody/ServicesBody';
import graphic from '../../../images/icons/graphic.png';
import mobile from '../../../images/icons/mobile.png';
import web from '../../../images/icons/web.png';


const serviceData = [
    {
        name: 'web & Mobile design',
        img: mobile
    },
    {
        name: 'Graphic design',
        img: graphic
    },
    {
        name: 'Web development',
        img: web
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2  style={{color: '#2D2D2D'}}>Provide awesome <span style={{color:"#7AB259"}}> services </span></h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesBody service={service}></ServicesBody>)
                    }
                </div>
            </div>

                

        </section>
    );
};

export default Services;