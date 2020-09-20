import React from 'react';
import '../CSS/Photo.css';



function Photo(props) {
   
    return (
        <div className="photo" style={{color:'white'}}>
            
           
            <div className="container"> 
                
            
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../Image/FitnessCenter.jpg")} className="d-block w-100" alt="FitnessCenter"/>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/BathRoom2.jpg")} className="d-block w-100" alt=" BathRoom2"/>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Bedroom.jpg")}  className="d-block w-100" alt="Bedroom"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Bedroom2.jpg")}  className="d-block w-100" alt="Bedroom2"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/ClubHouse.jpg")} className="d-block w-100" alt="ClubHouse"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/ClubHouse2.jpg")}  className="d-block w-100" alt="ClubHouse2"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Complex.jpg")}   className="d-block w-100" alt="Complex"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Complex2.jpg")}  className="d-block w-100" alt="Complex2"/>  
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/FitnessCenter.jpg")}  className="d-block w-100" alt="FitnessCenter"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Kitchen.jpg")}  className="d-block w-100" alt="Kitchen"/>  
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/LakeView.jpg")}  className="d-block w-100" alt="LakeView"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/Laundry.jpg")}  className="d-block w-100" alt="Laundry"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/LivingRoom.jpg")}  className="d-block w-100"  alt="LivingRoom "/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/LivingRoom2.jpg")}  className="d-block w-100" alt="LivingRoom2"/> 
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Image/PlayZone.jpg")}  className="d-block w-100"  alt="PlayZone"/> 
                        </div>
                    </div>
            
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
                

            </div> 
        </div>
    );
}

export default Photo;