
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";

class ApplicationForm extends Component {
    constructor(props) {
        super(props);
       this.state={
           firstName:'',
           lastName:'',
           email:'',
           phone:'',
           apartmentType:'',
           startingDate:'',
           leaseDuration:'',
           numberOfResident:'',
           occupation:''
       }
       this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);     
    }
    
    handleSubmit= (event) =>{
       
        
        alert("Your application is submitted successfully, our representative contact you within two days");
        this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        // event.preventdefault();
       //store.set('loggedIn', true);
         //alert(this.props.alertMessage);
        //  this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        // event.preventDefault();
        // console.log(this.props); 
      }
    
    handleChange= (event) => {
        let {name,value} = event.target;
        this.setState({ [name]: value });
      }
   
    render(){ 
        return (
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
                                            <form class="needs-validation" onSubmit={this.handleSubmit}validate >
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
        )
    }
}


export default ApplicationForm;
