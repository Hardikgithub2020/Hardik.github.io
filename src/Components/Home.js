import React from 'react';
import '../CSS/Home.css'
import Amenities from './Amenities';
import Photo from './Photo';
import Applicant from './Applicant';
import About from './About';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

function Home(props) {
    return (
        <div className="Home-Page">
            <div className= "welcome-tag">
            <h1 style={{fontFamily:"fantasy", color:"white", padding:"10vh",fontStretch:"ultra-expanded"}}>WELCOME TO RESERVATION</h1>
            </div>
            <About/>
            <Photo/>
            <Amenities/>
            <Applicant/> 
            <ContactInformation/>  
        </div>
    );
}

export default Home;