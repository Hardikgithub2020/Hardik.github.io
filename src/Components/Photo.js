import React from 'react';
import '../CSS/Photo.css';



function Photo(props) {
   
    return (
        <div className="photo" style={{color:'white'}}>
            
           
            <div className="container"> 
                
            
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require("../Image/FitnessCenter.jpg")} class="d-block w-100" alt="FitnessCenter"/>
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/BathRoom2.jpg")} class="d-block w-100" alt=" BathRoom2"/>
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Bedroom.jpg")}  class="d-block w-100" alt="Bedroom"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Bedroom2.jpg")}  class="d-block w-100" alt="Bedroom2"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/ClubHouse.jpg")} class="d-block w-100" alt="ClubHouse"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/ClubHouse2.jpg")}  class="d-block w-100" alt="ClubHouse2"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Complex.jpg")}   class="d-block w-100" alt="Complex"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Complex2.jpg")}  class="d-block w-100" alt="Complex2"/>  
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/FitnessCenter.jpg")}  class="d-block w-100" alt="FitnessCenter"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Kitchen.jpg")}  class="d-block w-100" alt="Kitchen"/>  
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/LakeView.jpg")}  class="d-block w-100" alt="LakeView"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/Laundry.jpg")}  class="d-block w-100" alt="Laundry"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/LivingRoom.jpg")}  class="d-block w-100"  alt="LivingRoom "/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/LivingRoom2.jpg")}  class="d-block w-100" alt="LivingRoom2"/> 
                        </div>
                        <div class="carousel-item">
                            <img src={require("../Image/PlayZone.jpg")}  class="d-block w-100"  alt="PlayZone"/> 
                        </div>
                    </div>
            
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> 
                

            </div> 
        </div>
    );
}

export default Photo;