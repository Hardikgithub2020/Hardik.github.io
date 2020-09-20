import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import NewNavBar from './Components/NewNavBar';


function App({userData}) {
  return (
            <div className="App">
              <NewNavBar/>
            </div>
          );
}
const mapStateToProps=state=>state

export default connect(mapStateToProps)(App);
