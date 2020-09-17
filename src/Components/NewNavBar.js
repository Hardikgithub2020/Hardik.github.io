import React from "react";
import {BrowserRouter as Router, Switch, Link, Route, useHistory} from 'react-router-dom'
import Amenities from './Amenities';
import Applicant from './Applicant';
import FloorPlan from './FloorPlan';
import Photo from './Photo';
import Resident from './Resident';
import Contact from './Contact';
import Map from './Map';
import Home from './Home'
import ApplicationForm from "./ApplicationForm";


// ===========================================

// Made using BOOTSTRAP CLASS
// ===========================================


function NewNavBar(props) {
  const history = useHistory();
  console.log(history);
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
        <span id="office-phone" style={{background:"none",opacity:"0.2",marginTop:"30px"}}>
            <h1 style={{fontFamily:'fantasy', color:"grey"}}>RESERVATION</h1>                         
            </span>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Amenities">
              Amenities
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Applicant">
              Applicant
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/FloorPlan">
              FloorPlan
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Map">
              Map
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Photo">
              Photo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Resident">
                Resident
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">
              Contact us
              </Link>
            </li>
            <li>
            <Link class="nav-link" to="/ApplicationForm">
              ApplicationForm
              </Link>
            
            </li>
            <li>
            
             </li>
            
          </ul>
        </div>
      </nav>
    
     
  
<Switch>
  <Route path="/Amenities">
    <Amenities />
  </Route>
  <Route exact path="/Applicant">
    <Applicant  pathHistory={history}/>
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
  <Route path="/ApplicationForm">
    <ApplicationForm />
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
