import React from 'react';
import '../CSS/Home.css'
import Amenities from './Amenities';
import Photo from './Photo';
import Applicant from './Applicant';
import About from './About';
import ContactInformation from './ContactInformation';
import FloorPlan from './FloorPlan';

function Home(props) {
    return (
        <div className="Home-Page" >
            <div className= "welcome-tag" style={{fontFamily:"cursive"   , color:"white", paddingTop:"10vh",fontStretch:"ultra-expanded"}}>
                <h1 >WELCOME TO RESERVATION</h1>
            </div>
            <About/>
            <FloorPlan/>
            <Amenities/>
            <Photo/>
           
                
                    <Applicant/> 
                    <div className="card-body">
                    <ContactInformation/>
                    </div>
                
             
        </div>
    );
}

export default Home;