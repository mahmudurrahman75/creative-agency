import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import { Navbar } from 'react-bootstrap';

const MakeAdmin = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [registerData, setRegisterData] = useState();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        setRegisterData(data)
        console.log(registerData);
    }


    const handelReview = () => {
        const newRegister = {...loggedInUser, ...registerData};
        fetch('http://localhost:5000/addOrder', {
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
                <h2>Make Admin</h2>
                <p>{loggedInUser.name}</p>
            </div>
            
            <div>
                <div className="col-md-2" class="list">
                        <a href="/adServiceList">Service List</a>
                        <a style={{display:"flex"}} href="/addService">Add Service</a>
                        <a href="/makeAdmin">Make Admin</a>
                </div>
                <div className="col-md-7">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        
                        <div style={{display:"flex"}}>
                            <label style={{marginLeft:"10px", marginTop:"14px", fontSize:"20px"}} htmlFor="">Email:</label><br/>
                            <input type="text" name="adminEmail" placeholder="jon@gmail.com"  ref={register}/>
                            <input onClick={handelReview} style={{backgroundColor:"green", color:"#FFFF"}}  className="test" type="submit"  value="Submit"/>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;