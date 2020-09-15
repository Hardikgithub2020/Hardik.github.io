import React from "react";
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import Amenities from './Amenities';
import Applicant from './Applicant';
import FloorPlan from './FloorPlan';
import Photo from './Photo';
import Resident from './Resident';
import Contact from './Contact';
import Map from './Map';
import Home from './Home'

// ===========================================

// Made using BOOTSTRAP CLASS
// ===========================================


function NewNavBar(props) {
  return (
    <div>
         <Router>
      <nav class="navbar navbar-expand-lg navbar-light" style={{background :'#fcba03' }}>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <a class="navbar-brand" href="#">
            <h1>REGISTRATION</h1>
          </a> */}
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Amenities">
              Amenities
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Applicants">
              Applicant
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/FloorPlan">
              FloorPlan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Map">
              Map
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Photo">
              Photo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Resident">
                Resident
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
              Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
  
<Switch>
  <Route path="/Amenities">
    <Amenities />
  </Route>
  <Route path="/Applicants">
    <Applicant />
  </Route>
  <Route path="/FloorPlan">
    <FloorPlan />
  </Route>
  <Route path="/Map">
    <Map />
  </Route>
  <Route path="/Photo">
    <Photo />
  </Route>
  <Route path="/Resident">
    <Resident />
  </Route>
  <Route path="/Contact">
    <Contact />
  </Route>
  <Route exact path="/">
    <Home />
  </Route>
</Switch>
</Router>
</div>
  );
}
export default NewNavBar;
