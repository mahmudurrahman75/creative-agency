import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Navbar } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';


const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [registerData, setRegisterData] = useState();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        setRegisterData(data)
        console.log(registerData);
    }


    const handelReview = () => {
        const newRegister = {...loggedInUser, ...registerData};
        fetch('https://shrouded-plateau-85923.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }



    return (
        <div class="order" className="services-container mt-5">
            <div style={{display:"flex", height:"80px"}} class="or">
                <Navbar.Brand className="logo" href="/home"><img src={logo} alt=""/></Navbar.Brand>
                <h2>Review</h2>
                <p>{loggedInUser.name}</p>
            </div>
            
            <div>
                <div className="col-md-2" class="list">
                        <a href="/order">Order</a>
                        <a style={{display:"flex"}} href="/serviceList">Service List</a>
                        <a href="/review">Review</a>
            
                </div>
                <div className="col-md-7">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        
                        <div>
                            <input type="text" name="clientName" placeholder="Your name" ref={register}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Company's name.Designation" name="company"  ref={register}/>
                        </div>

                        <div>   
                            <input type="text" placeholder="Description" name="description"  ref={register}/>
                        </div>
                        
                        <input onClick={handelReview} style={{backgroundColor:"#111430", color:"#FFFF"}}  className="test" type="submit"  value="Submit"/>

                        {/* <Link  to ="/event"><button  className="go-btn">Go Your Event</button></Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;