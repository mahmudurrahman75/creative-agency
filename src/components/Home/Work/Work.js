import React from 'react';
import './Work.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const Work = () => {
    return (
        <section class="work">
            <h3 style={{color:'#FFFFFF'}}>Here are some of <span style={{color:'#7AB259'}}>our works</span></h3>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carousel2}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carousel4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carousel5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Work;