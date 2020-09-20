
import React, { Component } from "react";
import * as actions from "../actions/userActions";
import axios from 'axios';
import ContactInformation from "./ContactInformation";


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
    this.onSubmit = this.onSubmit.bind(this);     
    }
    
    handleSubmit= (event) =>{
       
        alert("Your application is submitted successfully, our representative contact you within two days");
        this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
       
      }
    
    handleChange= (event) => {
        let {name,value} = event.target;
        this.setState({ [name]: value });
      }

      onSubmit=(event) =>{
        alert("Your application is submitted successfully, our representative contact you within two days");
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
                const response = await axios.post("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications", formData
                );
                console.log(response.data);
                this.setState({reserve: response.data})
                // this.props.history.push('/reserve/');
            }
        catch(e){
                console.log("Error", e)
            }
        }
   
    render(){ 
        return (
            <div className="ApplicationForm">
               <div className="card" style={{marginLeft:"15%", marginRight:"15%"}}>
                    <div className="card-group" >
                        <h3 style={{fontFamily:"fantasy"}}>Application Form</h3>
                    </div>
                    <div className="card-group" >
                        <div className='card-body'>
                            <div style={{backgroundColor:"#ededed"}}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="contactForm ">   
                                            <form className="needs-validation" onSubmit={this.onSubmit} validate="true" >
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationTooltip01">First name</label>
                                                        <input name="firstName" type="text" className="form-control" id="validationTooltip01" value={this.state.firstName} onChange={this.handleChange} required />
                                                        <div className="invalid-tooltip">Please provide your First number</div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationTooltip02">Last name</label>
                                                        <input name="lastName" type="text" className="form-control" id="validationTooltip02" value={this.state.lastName} onChange={this.handleChange} required/>
                                                        <div className="invalid-tooltip">Please provide your last number</div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                                    <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="validationTooltip10">Phone</label>
                                                    <input name="phone" type="tel" className="form-control" id="validationTooltip10"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange} required/>
                                                    <div className="invalid-tooltip">Please provide a valid number.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Apartment Type</label>
                                                    <input list="apartmentType"name="apartmentType" type="text" className="form-control" id="exampleFormControlInput1" value={this.state.apartmentType} onChange={this.handleChange} required/>
                                                    <datalist id="apartmentType">
                                                        <option value="DOGWOOD"/><option value="MAGNOLIA"/><option value="SUGAR MAPLE"/><option value="SASSFRAS"/><option value="CYPRESS"/><option value="SYCAMORE"/>
                                                    </datalist>
                                               </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput2">Starting Date</label>
                                                    <input name="startingDate" type="date" className="form-control" id="exampleFormControlInput2" value={this.state.startingDate} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput3">Lease Duration</label>
                                                    <input name="leaseDuration" type="Number" className="form-control" id="exampleFormControlInput3" value={this.state.leaseDuration} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput4">Number of Resident</label>
                                                    <input name="numberOfResident" type="number" className="form-control" id="exampleFormControlInput4" value={this.state.numberOfResident} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput5">Occupation</label>
                                                    <input name="occupation" type="text" className="form-control" id="exampleFormControlInput5" value={this.state.occupation} onChange={this.handleChange} required/>
                                                </div>
                                                
                                                <button className="btn btn-primary" type="submit">Submit form</button>
                                            </form>
                                        </div>
                                        <ContactInformation/>
                                        
                                        
                                    </div>
                                   
                                </div> 
                            </div>   
                        </div>
                        
                       
                    </div>                   
                </div>
            </div>                     
        )
    }
}


export default ApplicationForm;
