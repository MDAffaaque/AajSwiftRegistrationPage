import React from 'react'
import image1 from '../images/aaj.png';
import Navbar  from '../Components/Navbar';
import RegistrationForm from '../Components/RegistrationForm';
import BelowNavbar from '../Components/BelowNavbar';
import ScaleBusiness from '../Components/ScaleBusiness';
import TestimonialCard from '../Components/TestimonialCard';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
        <Navbar />
        <div style = {{display: 'flex',  justifyContent: 'space-between', marginTop: 90}}>
        <BelowNavbar />
        <RegistrationForm />
        </div>
        <div style= {{marginBottom: 480}}>
        <ScaleBusiness />
        </div>
        
        <TestimonialCard />
        <Footer />
        
    </>
  



  )
}

export default Home;
