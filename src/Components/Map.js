import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react';
require('dotenv').config();

 
export class MapContainer extends Component {
  render() {
    const style = {
        width: '90%',
        height: '70%'
      }
    return (
    
    <div className="card-body">
        <Map
              google={this.props.google}
              style={style}
              initialCenter={{
                lat: 39.103119 ,
                lng: -84.512016 
              }}
              zoom={14}
              onClick={this.onMapClicked}
        >
 
              <Marker onClick={this.onMarkerClick} name={'RESERVATION'} />
      
              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    <h1>Cincinnati</h1>
                  </div>
              </InfoWindow>
         </Map>
      </div>
    );
    
  }

}
 
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer)