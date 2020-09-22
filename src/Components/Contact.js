import React, { Component } from "react";
import '../CSS/Contact.css';

import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import ContactInformation from "./ContactInformation";

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
                                            <label htmlFor="firstName">First name</label>
                                                <input name="firstName" type="text" className="form-control" id="firstName" value={this.state.user_firstName}
                                                        onChange={(e) => this.setState({ user_firstName: e.target.value })} required />
                                                    <div className="invalid-tooltip">Please provide your First number</div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="lastName">Last name</label>
                                                    <input name="lastName" type="text" className="form-control" id="lastName" value={this.state.user_lastName} onChange={(e) =>this.setState({ user_lastName: e.target.value })} required/>
                                                    <div className="invalid-tooltip">Please provide your last number</div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email address</label>
                                                <input name="email" type="email" className="form-control" id="email" placeholder="name@example.com" value={this.state.user_email} onChange={(e) => this.setState({ user_email: e.target.value })}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phoneNumber">Phone</label>
                                                <input name="phoneNumber"type="tel" className="form-control" id="phoneNumber"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.user_phoneNumber} onChange={(e) =>this.setState({ user_phoneNumber: e.target.value })} required />
                                                
                                                <div className="invalid-tooltip">Please provide a valid number.</div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" className="form-control"id="message"rows="3"
                                                    value={this.state.user_message} onChange={(e) =>this.setState({ user_message: e.target.value })}></textarea>
                                            </div>
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </form>
                                    </div>
                                <div>
                            </div>
                            <ContactInformation/>            
                        </div>
                    </div>                   
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Contact);