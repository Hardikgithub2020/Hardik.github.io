import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import {useHistory } from "react-router-dom";


class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user_email : '',
            user_password :'',
           
        };
    }
    
    onSubmit=(event)=>{
            this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        }
        
    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="***********"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        );
    }
}

const mapStateToProps = (state) => {
    return state;
    };

export default connect(mapStateToProps)(LogInForm);