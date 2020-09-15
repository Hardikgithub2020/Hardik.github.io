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
        this.props.dispatch({
            type: actions.GET_REGISTRATION_SUCCESS,
            payload: this.state,
        });
        event.preventDefault();
    };
    render() {
        const { userInfo } = this.props.userData;
        return (
            
            <div className="contact">
                <div class="card-group">
                    
                            <div className="contactForm">
                                <h1>Welcome {userInfo.user_firstName}</h1>
                                <h1>How can we help you?</h1>
                                <form class="needs-validation" onSubmit={this.handleSubmit} novalidate >
                                <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationTooltip01">First name</label>
                                                <input name="firstName" type="text" class="form-control" id="validationTooltip01" value={this.state.user_firstName}
                                                        onChange={(e) => this.setState({ user_firstName: e.target.value })} required />
                                                    <div class="valid-tooltip">Looks good!</div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="validationTooltip02">Last name</label>
                                                    <input name="lastName" type="text" class="form-control" id="validationTooltip02" value={this.state.user_lastName} onChange={(e) =>this.setState({ user_lastName: e.target.value })} required/>
                                                    <div class="valid-tooltip">Looks good!</div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Email address</label>
                                                <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.user_email} onChange={(e) => this.setState({ user_email: e.target.value })}/>
                                            </div>
                                            <div class="form-group">
                                                <label for="validationTooltip10">Phone</label>
                                                <input type="text" class="form-control" id="validationTooltip10" value={this.state.user_phoneNumber} onChange={(e) =>this.setState({ user_phoneNumber: e.target.value })} required />
                                                
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
                            <section className="contactInfo" >
                                <div id="office-phone">
                                    <h2 class="normal" id="phone-number">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                        </svg>
                                        <a href="tel: (000)-000-0000" class="click_to_call_href sclick_to_call_href_contactus">
                                            <span class="click_to_call">(000) 000 0000</span>
                                        </a>
                                    </h2>    
                                </div>
                                <dl class="dl-horizontal" id="office_hours">
                                    <dt class="office_hours_today">Monday</dt><dd class="ole_hours_today">9AM-5PM</dd><dt>Tuesday</dt><dd>9AM-5PM</dd><dt>Wednesday</dt><dd>9AM-7PM</dd><dt>Thursday</dt><dd>9AM-5PM</dd><dt>Friday</dt><dd>9AM-5PM</dd><dt>Saturday</dt><dd>10AM-4PM</dd>
                                </dl>          
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

