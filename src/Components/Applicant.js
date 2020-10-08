import React, { Component } from "react";
import "../CSS/Applicant.css";
import {connect} from 'react-redux';
// Require to import withRouter to use History for redirect page
import { withRouter, Link } from 'react-router-dom';
import *as actions from '../actions/userActions'
import axios from 'axios';



class Applicant extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_email : '',
            user_password :'',
            error: false,
            login: false,
            userLogData:[]
        };
        this.onSubmit = this.onSubmit.bind(this);
        
        
    }
    async componentDidMount() {
        try{
            const response = await axios.get("https://secure-escarpment-96068.herokuapp.com/hardik/users/api/v1/users");
                this.setState({userLogData: response.data});
               
            }
        catch(e){
                console.log("Error", e)
            }
    }
   
    onSubmit= (event) =>{
       
        const { user_email, user_password } = this.state;
        const check_users = this.state.userLogData.filter(user => (user.email === user_email && user.password === user_password));
       
        if (check_users.length === 0) {
           alert("login failed")
           this.props.dispatch({
            type: actions.GET_LOGIN_FAILURE,
            
        });
        }else{
            alert("login successful")
            this.props.history.push('/ApplicationForm');
            this.props.dispatch({
                type: actions.GET_LOGIN_SUCCESS,
                payload: this.state,
            });

            
        }
        event.preventDefault();
      }

    
   
   
    render() {
        
        return (
            
            <div className="Applicant"  >
            <div className="">

                <div className="card justify-content">
                    <div className="card-group" >
                        <h3 style={{fontFamily:"cursive"}}>LOG - IN</h3>
                    </div>
                    <div className="card-group" >
                        <div className='card-body'>
                            <div style={{backgroundColor:"#ededed"}}>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group text-left">
                                            <label htmlFor="InputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="applicant@mail" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                                            
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="1234"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                                        </div>
                                        <div className="text-right">
                                        
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                        </div>
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
                            <div className='text-right'>
                                <Link to="/signIn" > <button className="btn btn-primary ">Register Now</button> </Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default withRouter(connect(mapStateToProps)(Applicant));


