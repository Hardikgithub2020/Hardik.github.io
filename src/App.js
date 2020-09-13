import React from 'react';
import logo from './logo.svg';
import './App.css';


import Navbar from './Components/Navbar';
import Home from './Components/Home';




function App() {
  
  return (
    <div className="App">
      <Navbar/>
       
        
      
      
       
        {/* <BrowserRouter history={browserHistory} className="content">
          <Route exact path="/" component={Home} />
          <Route path="/FloorPlan/:FullName" component={FloorPlan} />
          <Route path="/Map/:FullName" component={Map} />
          <Route path="/Photo/:FullName" component={Photo} />
          <Route path="/Resident/:FullName" component={Resident} />
          <Route path="/Amenities/:FullName" component={Amenities} />
          <Route path="/Applicant" component={Applicant} />
        </BrowserRouter> */}

        
      
    </div>
  );
}

export default App;
