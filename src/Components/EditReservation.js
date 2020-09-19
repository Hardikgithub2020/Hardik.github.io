import React, { Component } from 'react';
import axios from 'axios'
export default class EditReservation extends Component {
  constructor(props) {
    super(props);
    this.state ={
        id: window.location.pathname.split("/")[2],
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
      console.log(this.state.id)
    try{
            const response = await axios.get("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications/"+this.state.id)
            console.log(response.data);
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
            })
        }
    catch(e){
            console.log("Error", e)
        }
    }
  handleChange = (event) =>{
    event.preventDefault();
    console.log("handlechange", event.target.value)
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
    console.log(formData)
    try{
            const response = await axios.put("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications/"+window.location.pathname.split("/")[2], formData
            );
            console.log(response.data);
            this.props.history.push('/manageReservation/');
        }
    catch(e){
            console.log("Error", e)
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
                            <div style={{backgroundColor:"#ededed"}}>
                                <div class="card-body">
                                    <div class="card-group">
                                        <div className="contactForm">   
                                            <form class="needs-validation" onSubmit={this.onSubmit}validate >
                                                <div class="form-row">
                                                    <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip01">First name</label>
                                                        <input name="firstName" type="text" class="form-control" id="validationTooltip01" value={this.state.firstName} onChange={this.handleChange} required />
                                                        <div class="invalid-tooltip">Please provide your First number</div>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip02">Last name</label>
                                                        <input name="lastName" type="text" class="form-control" id="validationTooltip02" value={this.state.lastName} onChange={this.handleChange} required/>
                                                        <div class="invalid-tooltip">Please provide your last number</div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">Email address</label>
                                                    <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} required/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="validationTooltip10">Phone</label>
                                                    <input name="phone" type="tel" class="form-control" id="validationTooltip10"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange} required/>
                                                    <div class="invalid-tooltip">Please provide a valid number.</div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">Apartment Type</label>
                                                    <input list="apartmentType"name="apartmentType" type="text" class="form-control" id="exampleFormControlInput1" value={this.state.apartmentType} onChange={this.handleChange} required/>
                                                    <datalist id="apartmentType">
                                                        <option value="DOGWOOD"/><option value="MAGNOLIA"/><option value="SUGAR MAPLE"/><option value="SASSFRAS"/><option value="CYPRESS"/><option value="SYCAMORE"/>
                                                    </datalist>
                                               </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput2">Starting Date</label>
                                                    <input name="startingDate" type="date" class="form-control" id="exampleFormControlInput2" value={this.state.startingDate} onChange={this.handleChange} required/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput3">Lease Duration</label>
                                                    <input name="leaseDuration" type="Number" class="form-control" id="exampleFormControlInput3" value={this.state.leaseDuration} onChange={this.handleChange} required/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput4">Number of Resident</label>
                                                    <input name="numberOfResident" type="number" class="form-control" id="exampleFormControlInput4" value={this.state.numberOfResident} onChange={this.handleChange} required/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput5">Occupation</label>
                                                    <input name="occupation" type="text" class="form-control" id="exampleFormControlInput5" value={this.state.occupation} onChange={this.handleChange} required/>
                                                </div>
                                                
                                                <button class="btn btn-primary" type="submit">Submit form</button>
                                            </form>
                                        </div>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                        <div>Reservation</div>
                       
                    </div>                   
                </div>
            </div>  

  </React.Fragment>
       );
   }
}