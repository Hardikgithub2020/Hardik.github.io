import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'
 
export class MapContainer extends Component {
  render() {
    const style = {
        width: '80%',
        height: '80%'
      }
    return (
    //   <Map google={this.props.google} zoom={14}>
          <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 39.103119 ,
            lng: -84.512016 
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        
            <div>
              <h1>Cincinnati</h1>
            </div>
        </InfoWindow>
            
       
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(MapContainer)