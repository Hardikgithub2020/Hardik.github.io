import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

require('dotenv').config();


 
export class MapContainer extends Component {
  render() {
    const style = {
                      width: '90%',
                      height: '70%'
                  }
    return (
              <div className="card-body">
                <Map google={this.props.google} style={style} initialCenter={{lat: 39.103119 ,lng: -84.512016 }} zoom={14} onClick={this.onMapClicked} >
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
  apiKey: ("AIzaSyB9fTXamrH7p1iSzg8sokzUF_o5euK-N58")
})(MapContainer)