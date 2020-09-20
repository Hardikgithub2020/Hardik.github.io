import React, { Component } from "react";
import '../CSS/Contact.css';

import { connect } from "react-redux";
import * as actions from "../actions/userActions";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_firstName: "",
            user_lastName: "",
            user_email: "",
            user_phoneNumber: "",
            user_message: "",
        };
    }

    handleSubmit = (event) => {
        alert("Thank you for your interest, Our representative will contact you ");
        this.props.dispatch({
            type: actions.GET_REGISTRATION_SUCCESS,
            payload: this.state,
        });
        event.preventDefault();
    };
    render() {
        
        return (
            
            <div className="contact">
                <div className="card-group">
                    
                            <div className="contactForm">
                                {/* <h1>Welcome {userInfo.user_firstName}</h1> */}
                                <h1>WELCOME</h1>
                                <h3>Fill out the form below to email us</h3>
                                <form className="needs-validation" onSubmit={this.handleSubmit} validate="true" >
                                <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationTooltip01">First name</label>
                                                <input name="firstName" type="text" className="form-control" id="validationTooltip01" value={this.state.user_firstName}
                                                        onChange={(e) => this.setState({ user_firstName: e.target.value })} required />
                                                    <div className="invalid-tooltip">Please provide your First number</div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="validationTooltip02">Last name</label>
                                                    <input name="lastName" type="text" className="form-control" id="validationTooltip02" value={this.state.user_lastName} onChange={(e) =>this.setState({ user_lastName: e.target.value })} required/>
                                                    <div className="invalid-tooltip">Please provide your last number</div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                                <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.user_email} onChange={(e) => this.setState({ user_email: e.target.value })}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="validationTooltip10">Phone</label>
                                                <input type="tel" className="form-control" id="validationTooltip10"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.user_phoneNumber} onChange={(e) =>this.setState({ user_phoneNumber: e.target.value })} required />
                                                
                                                <div className="invalid-tooltip">Please provide a valid number.</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                                <textarea name="message" className="form-control"id="exampleFormControlTextarea1"rows="3"
                                                    value={this.state.user_message} onChange={(e) =>this.setState({ user_message: e.target.value })}></textarea>
                                            </div>
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </form>
                                    </div>
                                <div>
                            </div>
                            <section className="contactInfo" >
                                <div id="office-phone">
                                    <h1>Call Us</h1>
                                    <h2 className="normal" id="phone-number">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                        </svg>
                                        <a href="tel: (000)-000-0000" className="click_to_call_href sclick_to_call_href_contactus"><span className="click_to_call">(000)-000-0000</span></a>               
                                    </h2>    
                                </div>                                    
                                <dl className="dl-horizontal" id="office_hours">
                                    <dt className="office_hours_today">Monday</dt>
                                    <dd className="ole_hours_today">9AM-5PM</dd>
                                    <dt>Tuesday</dt>
                                    <dd>9AM-5PM</dd>
                                    <dt>Wednesday</dt>
                                    <dd>9AM-7PM</dd>
                                    <dt>Thursday</dt>
                                    <dd>9AM-5PM</dd>
                                    <dt>Friday</dt>
                                    <dd>9AM-5PM</dd>
                                    <dt>Saturday</dt>
                                    <dd>10AM-4PM</dd>
                                </dl> 
                                <hr/>
                                <h1 style={{fontFamily:'fantasy',margin:'5%', color:"grey", marginTop:"25%"}}>RESERVATION</h1>         
                            </section> 
                                    
                        </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Contact);