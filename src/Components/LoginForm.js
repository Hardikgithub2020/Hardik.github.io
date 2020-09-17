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
    
    handleSubmit=(event)=>{

        
       
        this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        
    }
    render() {
        
        return (
            <div className="SignInForm">
                <div class="card-body">
                    <form onSubmit={this.props.handleSubmit}>
                        <div class="form-group">
                        <h3>{this.props.message}</h3>
                        </div>
                        <div class="form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="***********"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                     </form> 
                </div>
             </div>
            );
        }
}

const mapStateToProps = (state) => {
    return state;
    };

export default connect(mapStateToProps)(LogInForm);