import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import { withRouter } from 'react-router-dom';



class Owner extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_email : '',
            user_password :'',
            error: false,
            login: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
    }

    
    onSubmit= (event) =>{
       
       
       const{save_email,save_password}=this.props.loginData;
        const { user_email, user_password } = this.state;
        this.setState({ error: false });
        if (!(user_email === save_email && user_password === save_password)) {
           this.setState({ error: true,login:false });
           alert("login failed")
           this.props.dispatch({
            type: actions.GET_LOGIN_SUCCESS,
            payload: this.state,
        });
        }else{
            alert("login successful")
            this.setState({ error: false,login:true });
            this.props.history.push('/Reservation');
            
        }
        event.preventDefault();
      }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
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

export default withRouter(connect(mapStateToProps)(Owner));