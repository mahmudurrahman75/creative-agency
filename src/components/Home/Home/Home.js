import React from 'react';
import AddedServices from '../AddedServices/AddedServices';
import BrandIcon from '../BrandIcon/BrandIcon';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Work from '../Work/Work';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandIcon></BrandIcon>
            <Services></Services>
            <AddedServices></AddedServices>
            <Work></Work>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;