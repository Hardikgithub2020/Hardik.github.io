import React from 'react';
import './CSS/Photo.css';



function Photo(props) {
   
    return (
        
        <div className="Photo">
            <img src={require("./Image/ClubHouse2.jpg")}/>
            <img src={require("./Image/FitnessCenter.jpg")}/>
            <img src={require("./Image/Bathroom.jpg")}/>
            <img src={require("./Image/BathRoom2.jpg")}/>
            <img src={require("./Image/Bedroom.jpg")}/>
            <img src={require("./Image/Bedroom2.jpg")}/>
            <img src={require("./Image/ClubHouse.jpg")}/>
            <img src={require("./Image/ClubHouse2.jpg")}/>
            <img src={require("./Image/Complex.jpg")}/>
            <img src={require("./Image/Complex2.jpg")}/>
            <img src={require("./Image/FitnessCenter.jpg")}/>
            <img src={require("./Image/Kitchen.jpg")}/>
            <img src={require("./Image/LakeView.jpg")}/>
            <img src={require("./Image/Laundry.jpg")}/>
            <img src={require("./Image/LivingRoom.jpg")}/>
            <img src={require("./Image/LivingRoom2.jpg")}/>
            <img src={require("./Image/PlayZone.jpg")}/>
        </div>
    );
}

export default Photo;