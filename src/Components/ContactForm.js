import React, { Component } from "react";
import '../CSS/Contact.css';

import { connect } from "react-redux";
import * as actions from "../actions/userActions";
//import ContactInformation from "./ContactInformation";

class ContactForm extends Component {
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
        alert("Thank you for your interest and one of our representative contact yopu within two days ");
        this.props.dispatch({
            type: actions.GET_REGISTRATION_SUCCESS,
            payload: this.state,
        });
        // event.preventDefault();
    };
    render() {
       
        return (
            
           
                <div class="card-group">
                    
                            <div className="contactForm">
                                {/* <h1>Welcome {userInfo.user_firstName}</h1> */}
                                <h3>{this.props.value}</h3>
                                
                                <form class="needs-validation" onSubmit={this.handleSubmit} validate >
                                <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationTooltip01">First name</label>
                                                <input name="firstName" type="text" class="form-control" id="validationTooltip01" value={this.state.user_firstName}
                                                        onChange={(e) => this.setState({ user_firstName: e.target.value })} required />
                                                    <div class="invalid-tooltip">Please provide your First number</div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="validationTooltip02">Last name</label>
                                                    <input name="lastName" type="text" class="form-control" id="validationTooltip02" value={this.state.user_lastName} onChange={(e) =>this.setState({ user_lastName: e.target.value })} required/>
                                                    <div class="invalid-tooltip">Please provide your last number</div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Email address</label>
                                                <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.user_email} onChange={(e) => this.setState({ user_email: e.target.value })}/>
                                            </div>
                                            <div class="form-group">
                                                <label for="validationTooltip10">Phone</label>
                                                <input type="tel" class="form-control" id="validationTooltip10"  placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.user_phoneNumber} onChange={(e) =>this.setState({ user_phoneNumber: e.target.value })} required />
                                                
                                                <div class="invalid-tooltip">Please provide a valid number.</div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea name="message" class="form-control"id="exampleFormControlTextarea1"rows="3"
                                                    value={this.state.user_message} onChange={(e) =>this.setState({ user_message: e.target.value })}></textarea>
                                            </div>
                                            <button class="btn btn-primary" type="submit">Submit form</button>
                                        </form>
                                    </div>
                                <div>
                            </div>
                           
                </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(ContactForm);

