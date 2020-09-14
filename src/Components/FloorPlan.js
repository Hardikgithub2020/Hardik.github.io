import React from "react";
import "../CSS/FloorPlan.css";
import { connect } from "react-redux";

function FloorPlan(props) {
  return (
    <div className="FloorPlan">
       <div class="card-deck">
        <div class="card">
          <img
            src={require("../Image/FloorPlan_Dogwood.jpeg")}
            class="card-img-top"
            alt="Floorplan_Dogwood"
          />
          <div class="card-body">
            <h5 class="card-title">DOGWOOD</h5>
            <p class="card-text">1 Bedroom, 1 Bathroom </p>
            <p class="card-text">
              <small class="text-muted">Avibility : 10</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={require("../Image/Floorplan_Magnolia_1B1B.jpeg")}
            class="card-img-top"
            alt="Floorplan_Magnolia"
          />
          <div class="card-body">
            <h5 class="card-title">Magnolia</h5>
            <p class="card-text">1 Bedroom, 1 Bathroom </p>
            <p class="card-text">
              <small class="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={require("../Image/FloorPlan_SugarMaple_2B1Bath.jpeg")}
            class="card-img-top"
            alt="FloorPlan_SugarMaple_2B1Bath"
          />
          <div class="card-body">
            <h5 class="card-title">SUGAR MAPLE</h5>
            <p class="card-text">2 Bedroom, 1 Bathroom</p>
            <p class="card-text">
              <small class="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        </div>
        <div class="card-deck">
        <div class="card">
          <img
            src={require("../Image/FloorPlan_sassafras_2B2B.jpeg")}
            class="card-img-top"
            alt="FloorPlan_sassafras_2B2B"
          />
          <div class="card-body">
            <h5 class="card-title">SASSAFRAS</h5>
            <p class="card-text">2 Bedroom, 2 Bathroom</p>
            <p class="card-text">
              <small class="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={require("../Image/FloorPlan_Sycamore_2b2Bath2floor.jpeg")}
            class="card-img-top"
            alt="FloorPlan_Sycamore"
          />
          <div class="card-body">
            <h5 class="card-title">SYCAMORE</h5>
            <p class="card-text">2 Bedroom, 2 Bathroom, 2 FLoor</p>
            <p class="card-text">
              <small class="text-muted">Avibility: 10 unit</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src={require("../Image/FloorPlan_Cypress_3b2Bath.jpeg")}
            class="card-img-top"
            alt="FloorPlan_Cypress"
          />
          <div class="card-body">
            <h5 class="card-title">CYPRESS</h5>
            <p class="card-text">3 Bedroom, 2 Bathroom</p>
            <p class="card-text">
              <small class="text-muted">Avibility: 10 unit</small>
            </p>
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
