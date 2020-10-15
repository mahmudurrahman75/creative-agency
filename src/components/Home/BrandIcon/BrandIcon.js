import React from 'react';
import './BrandIcon.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const BrandIcon = () => {
    return (
        <div className="d-flex justify-content-center brandIcon">
            <div className="w-75 row col-md-8 brandLogo">
                <img src={slack} alt=""/>
                <img src={google} alt=""/>
                <img src={uber} alt=""/>
                <img src={netflix} alt=""/>
                <img src={airbnb} alt=""/>
                
            </div>
        </div>
    );
};

export default BrandIcon;