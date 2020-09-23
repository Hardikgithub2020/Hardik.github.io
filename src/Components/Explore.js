import React, { Component } from 'react';
import axios from 'axios'
import '../CSS/Explore.css'
require('dotenv').config();



export default class Explore extends Component {
  constructor(props) {
        super(props);
        this.state ={
            attraction: [],
            restaurants: [],
            collections:[]
        }
  }

  sendGetRestaurant = async () => {
      try {     // Here we pass a api key in header objrct
              const resp = await axios.get('https://developers.zomato.com/api/v2.1/search?lat=39.103119&lon=-84.512016',{headers: {"user-key":"a725a13c0e61675a1eb07e3df050cd20"} });
                    this.setState({restaurants: resp.data.restaurants});
          
          }catch (err) {
                          console.error(err);
                        }    
  }

  async componentDidMount() {
        this.sendGetRestaurant();
  }
    
  render() {
      let displayDataForRestaurants = this.state.restaurants.map((res,i) =>{
            return (
                        <div className="collections card text-white text-left bg-info mb-3" style={{maxWidth: "18rem",margin:"2vw"}}  key={i}>
                            <h4 className="card-header" >{res.restaurant.name.toUpperCase()}</h4>
                            <div className="card-body">
                              <p className="card-text">Services : {res.restaurant.highlights.toString()}</p>  
                              <p className="card-text">Street : {res.restaurant.location.address}</p> 
                              <p className="card-text">Phone Number : {res.restaurant.phone_numbers}</p>
                              <p className="card-text">Locality : {res.restaurant.location.locality}</p>
                            </div> 
                            <div className="card-footer">
                              <p className="card-text">Cuisines : {res.restaurant.cuisines}</p>
                            </div>
                        </div>
                  );
        });
    
    return (
              <div >
                <h1 id="explore-header" style={{fontFamily:"cursive"}}>EXPLORE NEARBY RESTAURANT</h1>
                <div className="explore row" style={{margin:"auto"}}>
                  {displayDataForRestaurants}
                </div>  
              </div>
            )
    }
}