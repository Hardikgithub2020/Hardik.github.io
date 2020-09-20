import React from "react";
import {BrowserRouter as Router, Switch, Link, Route, useHistory} from 'react-router-dom'
import Amenities from './Amenities';
import Applicant from './Applicant';
import FloorPlan from './FloorPlan';
import Photo from './Photo';
import Resident from './Resident';
import Contact from './Contact';
import MapContainer from './Map';
import Home from './Home'
import ApplicationForm from "./ApplicationForm";
import Reservation from './Reservation';
import EditReservation from  './EditReservation';
import Explore from './Explore';


// ===========================================

// Made using BOOTSTRAP CLASSNameclassName
// ===========================================


function NewNavBar(props) {
  const history = useHistory();
  console.log(history);
  return (
    <div>
         <Router>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background :'#fcba03' }}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <span >
                      <h1 style={{background:"none",opacity:"0.2",fontFamily:'fantasy', color:"grey"}}>RESERVATION</h1>                         
                  </span>
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Amenities">AMENITIES</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Applicant">APPLICATION</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/FloorPlan">FLOOR_PLAN</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Map">MAP</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Photo">PHOTO</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Resident">RESIDENT</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">CONTACT</Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/ApplicationForm">APPLICATION_FORM</Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/Reservation">RESERVATION</Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/Explore">EXPLORE</Link>
                      </li>
                  </ul>
              </div>
            </nav>
      
            <Switch>
              <Route path="/Amenities">
                <Amenities />
              </Route>
              <Route exact path="/Applicant">
                <Applicant  />
              </Route>
              <Route path="/FloorPlan">
                <FloorPlan />
              </Route>
              <Route path="/Map">
                <MapContainer />
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
              <Route exact path="/Reservation">
                <Reservation />
              </Route>
              {/* Edit reservation has nos et link and get access through edit button */}
              <Route exact path = '/editReservation/:id' component={EditReservation} />
              <Route path="/Explore">
                <Explore />
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
