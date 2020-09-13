import React from 'react';
import './CSS/FloorPlan.css'

function FloorPlan(props) {
    return (
        <div className='FloorPlan'>
            <img src={require("./Image/FloorPlan_Cypress_3b2Bath.jpeg")}/>
            <img src={require("./Image/Floorplan_Magnolia_1B1B.jpeg")}/>
            <img src={require("./Image/FloorPlan_sassafras_2B2B.jpeg")}/>
            <img src={require("./Image/FloorPlan_SugarMaple_2B1Bath.jpeg")}/>
        </div>
    );
}

export default FloorPlan;