import React from 'react';
import '../CSS/Aminities.css'

function Amenities(props) {
    return (
        <div className="aminities" >
           
            <div class="container-fluid" style={{background:'white'}}>
            <h1 style={{fontFamily:'fantasy',margin:'5%'}}>AMENITIES</h1>
            
            <div className="aminities-Container" >
            <div class="card-group">
            <div class="card-body">
            <div className="community-Aminities" class='container'>
                <h3>COMMUNITY </h3>
                <ul>
                    <li>Package Receiving</li>
                    <li>On-Site Maintenance</li>
                    <li>Garage</li>
                    <li>Free Weights</li>
                    <li>Fitness Center</li>
                    <li>Covered Parking</li>
                    <li>Business Center</li>
                    <li>Clubhouse</li>
                    <li>High Speed Internet</li>
                    <li>On-Site Management</li>
                    <li>Scenic Lake</li>
                    <li>Bark Park</li>
                    <li>Game Room</li>
                    <li>Resident Events</li>
                    <li>Two Sparkling Pools</li>
                    <li>TOP RATED Community by Apartment Ratings</li>
                </ul>
            </div>
            </div>
            <div class="card-body">
            <div className="apartment-Aminities" class='container'>
                <h3>APARTMENT </h3>
                <ul>
                    <li>Refrigerator</li>
                    <li>Patio/Balcony</li>
                    <li>Fireplace</li>
                    <li>Cable Ready</li>
                    <li>Air Conditioner</li>
                    <li>Ceiling Fan</li>
                    <li>Dishwasher</li>
                    <li>Carpeting</li>
                    <li>Extra Storage</li>
                    <li>Vaulted Ceiling</li>
                    <li>Vinyl Hardwood Plank Floors</li>
                    <li>W/D Hookup</li>
                </ul>
            </div>
            </div>
            <div class="card-body">
            <div className="pet-Policy" class='container'>
                <h3>PET POLICY</h3>
                <ul className="pet-Policy-ul">
                    <li>Cats - 2 allowed, One time Fee $250.00, Rent $35.0</li>
                    <li>Dogs - 2 allowed, One time Fee $250.00, Rent $35.00</li>
                </ul>
                </div>
                </div>
            </div> 
            </div> 
            </div> 
            
        </div>
    );
}

export default Amenities;