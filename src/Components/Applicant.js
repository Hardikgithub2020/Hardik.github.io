import React, { Component } from "react";
import "../CSS/Applicant.css";
import {connect} from 'react-redux';
// Require to import withRouter to use History for redirect page
import { withRouter } from 'react-router-dom';
import *as actions from '../actions/userActions'


class Applicant extends Component {
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
            this.props.history.push('/ApplicationForm');
            
        }
        event.preventDefault();
      }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
      }
   
   
    render() {
        
        return (
            <React.Fragment>
            <div className="Applicant">

                <div className="card "style={{margin:"10%"}}>
                    <div className="card-group" >
                        <h3 style={{fontFamily:"fantasy"}}>LOG - IN</h3>
                    </div>
                    <div className="card-group" >
                        <div className='card-body'>
                            <div style={{backgroundColor:"#ededed"}}>
                                <div className="card-body">
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
                                        
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                       
                                    </form> 
                                </div> 
                            </div>   
                        </div>
                        <div className="card-body Center">
                            <div className="card-body text-left">
                            <h2 className="card-title">Register for a Fast, Easy Application</h2>
                            <p className="card-text">With a free account, you can:</p>               
                            <ul>
                                <li>Save your application and log in at any time to continue.</li>
                                <li>Check the status of your applications.</li>
                                <li>Use your account with multiple applications.</li>
                            </ul>
                            <a href="#">Register Now</a>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default withRouter(connect(mapStateToProps)(Applicant));


