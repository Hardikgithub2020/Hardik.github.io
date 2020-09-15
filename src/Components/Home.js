import React from 'react';
import '../CSS/Home.css'
import Amenities from './Amenities';
import Photo from './Photo';
import Applicant from './Applicant';
import About from './About';

function Home(props) {
    return (
        <div className="Home-Page">
            <div className= "welcome-tag">
            <h1>WELCOME TO RESERVATION</h1>
            </div>
            <About/>
            <Photo/>
            <Amenities/>
            <Applicant/>   
        </div>
    );
}

export default Home;