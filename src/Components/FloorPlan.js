import React from "react";
import "../CSS/FloorPlan.css";
import { connect } from "react-redux";

function FloorPlan(props) {
  return (
    <div className="FloorPlan" >
      <div className='card-body' style={{margin:'auto'}}>
       <div className="row" style={{margin:"auto"}} >
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
        <div className="card-body">
         <img
            src={require("../Image/FloorPlan_Dogwood.jpeg")}
            className="card-img-top"
            alt="Floorplan_Dogwood"
            min-height="500px"
          />
          
            
            <p className="card-text">1 Bedroom, 1 Bathroom </p>
            <p className="card-text">
              <small className="text-muted">Avibility : 10</small>
            </p>
            </div>
            <div className="card-footer">
                <h5 className="card-title">DOGWOOD</h5>
            </div>
          
        </div>
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
        <div className="card-body">
          <img
            src={require("../Image/Floorplan_Magnolia_1B1B.jpeg")}
            className="card-img-top"
            alt="Floorplan_Magnolia"
            min-height="500px"
          />
          
            
            <p className="card-text">1 Bedroom, 1 Bathroom </p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
            </div>
            <div className="card-footer">
            <h5 className="card-title">Magnolia</h5>
            </div>
         
        </div>
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
        <div className="card-body">
          <img
            src={require("../Image/FloorPlan_SugarMaple_2B1Bath.jpeg")}
            className="card-img-top"
            alt="FloorPlan_SugarMaple_2B1Bath"
            min-height="500px"
          />
            <p className="card-text">2 Bedroom, 1 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
          <div className="card-footer">
            <h5 className="card-title">SUGAR MAPLE</h5>
            </div>

        </div>
       
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
          
          <div className="card-body">
          <img
            src={require("../Image/FloorPlan_sassafras_2B2B.jpeg")}
            className="card-img-top"
            alt="FloorPlan_sassafras_2B2B"
            
          />
           
            <p className="card-text">2 Bedroom, 2 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
          <div className="card-footer">
          <h5 className="card-title">SASSAFRAS</h5>
          </div>
        </div>
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
        <div className="card-body">
          <img
            src={require("../Image/FloorPlan_Sycamore_2b2Bath2floor.jpeg")}
            className="card-img-top"
            alt="FloorPlan_Sycamore"
            minHeight="425px"
           
          />
           <p className="card-text">2 Bedroom, 2 Bathroom, 2 FLoor</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
          <div className='card-footer'>
          <h5 className="card-title">SYCAMORE</h5>

          </div>
        </div>
        <div className="card text-white text-left bg-info " style={{maxWidth: "25rem",margin:"2rem"}}>
        <div className="card-body">
          <img
            src={require("../Image/FloorPlan_Cypress_3b2Bath.jpeg")}
            className="card-img-top"
            alt="FloorPlan_Cypress"
            minHeight="425px"
            
          />
          
            
            <p className="card-text">3 Bedroom, 2 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
          <div className="card-footer">
          <h5 className="card-title">CYPRESS</h5>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(FloorPlan);
