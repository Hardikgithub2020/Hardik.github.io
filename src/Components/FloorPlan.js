import React from "react";
import "../CSS/FloorPlan.css";
import { connect } from "react-redux";

function FloorPlan(props) {
  return (
    <div className="FloorPlan">
      <div className="card-group">
       <div className="card-deck">
        <div className="card">
          <img
            src={require("../Image/FloorPlan_Dogwood.jpeg")}
            className="card-img-top"
            alt="Floorplan_Dogwood"
          />
          <div className="card-body">
            <h5 className="card-title">DOGWOOD</h5>
            <p className="card-text">1 Bedroom, 1 Bathroom </p>
            <p className="card-text">
              <small className="text-muted">Avibility : 10</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../Image/Floorplan_Magnolia_1B1B.jpeg")}
            className="card-img-top"
            alt="Floorplan_Magnolia"
          />
          <div className="card-body">
            <h5 className="card-title">Magnolia</h5>
            <p className="card-text">1 Bedroom, 1 Bathroom </p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../Image/FloorPlan_SugarMaple_2B1Bath.jpeg")}
            className="card-img-top"
            alt="FloorPlan_SugarMaple_2B1Bath"
          />
          <div className="card-body">
            <h5 className="card-title">SUGAR MAPLE</h5>
            <p className="card-text">2 Bedroom, 1 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        </div>
        <div className="card-deck">
        <div className="card">
          <img
            src={require("../Image/FloorPlan_sassafras_2B2B.jpeg")}
            className="card-img-top"
            alt="FloorPlan_sassafras_2B2B"
          />
          <div className="card-body">
            <h5 className="card-title">SASSAFRAS</h5>
            <p className="card-text">2 Bedroom, 2 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../Image/FloorPlan_Sycamore_2b2Bath2floor.jpeg")}
            className="card-img-top"
            alt="FloorPlan_Sycamore"
          />
          <div className="card-body">
            <h5 className="card-title">SYCAMORE</h5>
            <p className="card-text">2 Bedroom, 2 Bathroom, 2 FLoor</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../Image/FloorPlan_Cypress_3b2Bath.jpeg")}
            className="card-img-top"
            alt="FloorPlan_Cypress"
          />
          <div className="card-body">
            <h5 className="card-title">CYPRESS</h5>
            <p className="card-text">3 Bedroom, 2 Bathroom</p>
            <p className="card-text">
              <small className="text-muted">Avibility: 10 unit</small>
            </p>
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
