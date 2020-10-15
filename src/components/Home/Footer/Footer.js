import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <main style={{height: '550px', backgroundColor:"#FBD062"}} className="row d-flex align-items-top">
            <div className="col-md-4 offset-md-1" style={{marginTop:"50px"}}>
                <h3 style={{color:"#3E4559"}}>Let us handle your <br/>project, professionally.</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique totam amet consequuntur sequi voluptas cumque voluptatem eaque quo maxime.</p>
            </div>
            <div className="col-md-6">
            
                <form action="" style={{marginTop:"40px"}}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your mane/company's name *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button style={{backgroundColor:"#111430", color:"#FFFF"}} type="button" className="btn"> Submit </button>
                    </div>
                </form>
           
            </div>
            <p className="text-secondary" style={{marginLeft:"550px", marginTop:"10px"}}>copyright Orange labs 2020</p>
        </main>
    );
};

export default Footer;