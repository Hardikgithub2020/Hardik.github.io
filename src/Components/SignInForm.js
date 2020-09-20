import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";


class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user_email : '',
            user_password :'',
        };
    }
    
    handleSubmit=(event)=>{
        alert(this.props.alertMessage);
        this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        
    }
    render() {
        
        return (
            <div className="SignInForm">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <h3>{this.props.message}</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="***********"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                     </form> 
                </div>
             </div>
            );
        }
}

const mapStateToProps = (state) => {
    return state;
    };

export default connect(mapStateToProps)(SignInForm);