import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Data = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrderData(data));
    }, []);





    const [isOrder, setIsOrder] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsOrder(data));
    }, [])



    return (
        <div>
            <h3 style={{textAlign:"center", margin:"30px"}}>The Ordered Quantity: {orderData.length}</h3>
            
            {
                orderData.map(pd => 
                

                    <div class="container">
                        {isOrder && <div class="row">
                            
                            <li class="col">{pd.name}</li>
                            <li class="col">{pd.email}</li>
                            <li class="col">{pd.graphicDesign}</li>
                            <li class="col">{pd.price}</li>

                            <div class="dropdown">
                                <button style={{color:"goldenrod"}} class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pending
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button">pending</button>
                                    <button class="dropdown-item" type="button">Done</button>
                                    <button class="dropdown-item" type="button">on going</button>
                                </div>
                            </div>

                        </div>}
                        
                    </div>

                )
            }



        </div>
    );
};

export default Data;