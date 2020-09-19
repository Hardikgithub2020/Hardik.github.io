import React, { Component } from 'react';
import axios from 'axios'
import '../CSS/Explore.css'


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
      try {
          const resp = await axios.get('https://developers.zomato.com/api/v2.1/search?lat=39.103119&lon=-84.512016',{
              headers: {"user-key": "a725a13c0e61675a1eb07e3df050cd20"}
            });
            this.setState({restaurants: resp.data.restaurants})
          console.log(this.state.restaurants);
          
      } catch (err) {
          console.error(err);
      }
      
  }
    async componentDidMount() {
        // try{
        //     const attractionResponse = await axios({
        //       "method":"GET",
        //       "url":"https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng",
        //       "headers":{
        //       "content-type":"application/octet-stream",
        //       "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //       "x-rapidapi-key":"8976a8aeddmshac44a935849b097p1d53f6jsn0eb70e27ee67",
        //       "useQueryString":true
        //       },"params":{
        //       "lunit":"km",
        //       "currency":"USD",
        //       "limit":"30",
        //       "distance":"5",
        //       "lang":"en_US",
        //       "latitude":"39.103119",
        //       "longitude":"-84.512016"
        //       }
        //       })
        //      // console.log(response)
        //        const restaurantResponse = await axios({
        //         "method":"GET",
        //         "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
        //         "headers":{
        //         "content-type":"application/octet-stream",
        //         "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //         "x-rapidapi-key":"8976a8aeddmshac44a935849b097p1d53f6jsn0eb70e27ee67",
        //         "useQueryString":true
        //         },"params":{
        //         "limit":"30",
        //         "currency":"USD",
        //         "distance":"2",
        //         "lunit":"km",
        //         "lang":"en_US",
        //         "latitude":"39.103119",
        //         "longitude":"-84.512016"
        //         }
        //         });
        //     // console.log(restau.data.data)
           
        //      console.log(attractionResponse.data.data);
        //      console.log(restaurantResponse.data.data);
        //   //  console.log(x[0].photo.images.medium.url);
        //   //  console.log(x[0].cuisine[0].name);
        //      this.setState({attraction: attractionResponse.data.data})
        //     this.setState({restaurants: restaurantResponse.data.data})
        //     console.log(this.state.attraction);
        // }
        // catch(e){
        //     //console.log("Error", e)
        // }



        // =====================================

        // try{
        //       const zomataResponse = await axios({
        //         method: 'GET',
        //         url: 'https://developers.zomato.com/api/v2.1/collections?city_id=1030&count=50',
        //         headers: {
        //           "user-key": "a725a13c0e61675a1eb07e3df050cd20",
        //           "content-type": "application/json"
        //         }
        //       })
        //        console.log(zomataResponse.data.collections);
        //        this.setState({collections:zomataResponse.data.collections})
        //   }catch(e){
        //   console.log("Error",e);
        //   };

        this.sendGetRestaurant();
    }
    
    

      render() {

      // const displayDataForAttraction = this.state.attraction.map((res,i) =>{
      //       let imageUrl='';
      //       let website='';
      //       try{
      //       if(res.photo.images.small.url){
      //         imageUrl = res.photo.images.small.url;
      //         website=res.website;
      //       }
      //     }catch(e){
      //       console.log(e);
      //   };
      //   return (
          
      //     <div className="attraction card"   key={i}>
      //       <img src={imageUrl} alt="Restaurant image"/>
      //       <div className="card-body"> 
      //       <h4 className="card-title" >{res.name}</h4> 
      //       <p className="card-text">{res.address}</p>
      //       </div> 
      //       <div class="card-footer">
      //         <small class="text-muted"><a href={ website}>{ website}</a></small>
      //       </div>
      //     </div>
          
      //     );
      // });
      
  let displayDataForRestaurants = this.state.restaurants.map((res,i) =>{
         
      return (
          
        <div className="collections card text-white text-left bg-info mb-3" style={{maxWidth: "18rem",margin:"3px"}}  key={i}>
          <h4 className="card-header" >{res.restaurant.name}</h4>
          <div className="card-body">
          <p className="card-text">Services:{res.restaurant.highlights.toString()}</p>  
          <p className="card-text">Street:{res.restaurant.location.address}</p> 
          <p className="card-text">Phone Number:{res.restaurant.phone_numbers}</p>
          <p className="card-text">Locality:{res.restaurant.location.locality}</p>
          </div> 
          <div className="card-footer">
          <p className="card-text">Cuisines:{res.restaurant.cuisines}</p>
          </div>
        </div>
        
        );
    });
    
    return (
          <div >
            <h1 id="explore-header">Explore nearby restaurants</h1>
              <div className="explore row row-cols-1 row-cols-md-4">
              {displayDataForRestaurants}
              </div>
            
          </div>
      )
    }
}