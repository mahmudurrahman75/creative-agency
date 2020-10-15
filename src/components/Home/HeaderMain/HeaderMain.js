import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3E4559"}}>Let's Grow Your <br/>Brand To The <br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique totam amet consequuntur sequi voluptas cumque voluptatem eaque quo maxime.</p>
                <Link to="/order"><button  style={{backgroundColor:'black', color:'white'}} className="btn">Hire Us</button></Link>
            </div>
            <div className="col-md-6">
                <img src={Frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;