import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Navbar } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import { useForm } from 'react-hook-form';

const AddService = () => {

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
                <h2>Add Service</h2>
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
                        
                        <div>
                            <label style={{marginLeft:"10px"}} htmlFor="">Service Title</label><br/>
                            <input type="text" placeholder="Enter title" name="title"  ref={register}/>
                        </div>

                        <div>
                        <label style={{marginLeft:"10px"}} htmlFor="">Description</label><br/>
                            <input type="text" placeholder="Enter Description" name="enter"  ref={register}/>
                        </div>
                        
                        <input onClick={handelReview} style={{backgroundColor:"#111430", color:"#FFFF"}}  className="test" type="submit"  value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;