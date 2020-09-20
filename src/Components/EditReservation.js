import React, { Component } from 'react';
import axios from 'axios';
import Photo from './Photo';


export default class EditReservation extends Component {
  constructor(props) {
    super(props);
    this.state ={
        id: window.location.pathname.split("/")[2],//other way to collec t string last value --->window.location.pathname.slice(-1)
        
        reserve: [],
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        apartmentType:"",
        startingDate:"",
        leaseDuration:"",
        numberOfResident:"",
        occupation:""      
    }
  }

  async componentDidMount() {
    
    try{    
            const response = await axios.get("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications/"+this.state.id);
    
            this.setState({
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                email : response.data.email,
                phone : response.data.phone,
                apartmentType : response.data.apartmentType,
                startingDate : response.data.startingDate,
                leaseDuration : response.data.leaseDuration,
                occupation : response.data.occupation,
                numberOfResident : response.data.numberOfResident,
            });
        }
    catch(e){
            console.log("Error :", e)
        }
 }

handleChange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value
    });
}

onSubmit=(event) =>{
    alert("Your changes are saved");
    event.preventDefault();
    let formData = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email : this.state.email,
        phone : this.state.phone,
        apartmentType : this.state.apartmentType,
        startingDate : this.state.startingDate,
        leaseDuration : this.state.leaseDuration,
        occupation : this.state.occupation,
        numberOfResident : this.state.numberOfResident,
    };
    this.postAPI(formData);
}
postAPI = async (formData) =>{
    try{
            await axios.put("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications/"+window.location.pathname.split("/")[2], formData);
            this.props.history.push('/Reservation');
            
        }
    catch(e){
            console.log("Error :", e)
        }
    }
   render(){
    console.log(this.state.id)
       return(
        <React.Fragment>
             <div className="ApplicationForm">
               <div className="card">
                    <div className="card-group" >
                        <h3 style={{fontFamily:"fantasy"}}>Application Form</h3>
                    </div>
                    <div className="card-group" >
                        <div className='card-body'>
                            <div >
                                <div className="">
                                    <div className="card-group">
                                        <div className="contactForm">   
                                            <form className="needs-validation" onSubmit={this.onSubmit} validate="true" >
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="firstName">First name</label>
                                                        <input name="firstName" type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                                                        <div className="invalid-tooltip">Please provide your First number</div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lastName">Last name</label>
                                                        <input name="lastName" type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                                                        <div className="invalid-tooltip">Please provide your last number</div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input name="phone" type="text" className="form-control" id="phone"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange} required/>
                                                    <div className="invalid-tooltip">Please provide a valid number.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="apartmentType">Apartment Type</label>
                                                    <input list="apartmentType"name="apartmentType" type="text" className="form-control" id="apartmentType" value={this.state.apartmentType} onChange={this.handleChange} required/>
                                                    <datalist id="apartmentType">
                                                        <option value="DOGWOOD"/><option value="MAGNOLIA"/><option value="SUGAR MAPLE"/><option value="SASSFRAS"/><option value="CYPRESS"/><option value="SYCAMORE"/>
                                                    </datalist>
                                               </div>
                                                <div className="form-group">
                                                    <label htmlFor="startingDate">Starting Date</label>
                                                    <input name="startingDate" type="date" className="form-control" id="startingDate" value={this.state.startingDate} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="leaseDuration">Lease Duration</label>
                                                    <input name="leaseDuration" type="Number" className="form-control" id="leaseDuration" value={this.state.leaseDuration} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="numberOfResident">Number of Resident</label>
                                                    <input name="numberOfResident" type="number" className="form-control" id="numberOfResident" value={this.state.numberOfResident} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="occupation">Occupation</label>
                                                    <input name="occupation" type="text" className="form-control" id="occupation" value={this.state.occupation} onChange={this.handleChange} required/>
                                                </div>
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </form>
                                        </div>
                                        <div style={{width:"60%"}}><Photo/></div>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                        
                       
                    </div>                   
                </div>
            </div>  

  </React.Fragment>
       );
   }
}