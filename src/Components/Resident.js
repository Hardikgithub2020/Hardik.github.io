import React, { Component } from 'react';
import * as actions from '../actions/userActions';
import {connect} from 'react-redux';





class Resident extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_email : '',
            user_password :'',
            error: false,
            login: false
        };
        this.onSubmit = this.onSubmit.bind(this);  
    }

    
    onSubmit= (event) =>{
      
        const{save_email,save_password} = this.props.loginData;
        const { user_email, user_password } = this.state;
        this.setState({ error: false });
        if (!(user_email === save_email && user_password === save_password)) {
           this.setState({ error: true,login:false });
           alert("login failed")
           this.props.dispatch({
            type: actions.GET_LOGIN_FAILURE,
            
        });
        }else{
            alert("login successful")
            this.setState({ error: false,login:true });
            this.props.dispatch({
                type: actions.GET_LOGIN_SUCCESS,
                payload: this.state,
            });
            
        }
        event.preventDefault();
      }

    
    render() {
       
        return (

                <div className="card" style={{margin:"10%"}}>
                    
                <div className="card-group" >
                    <div className='card-body'>
                        <div style={{backgroundColor:"#e4f0ee"}}>
                            <div className="SignInForm">
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group text-left">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="applicant@mail" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                                            
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="1234" value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                                        </div>
                                        <div className="text-right">
                                        
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                        </div>
                                    </form> 
                                </div>
                             </div>
                        </div>   
                    </div>
                    <div className='card-body'>
                        <div className='card-body'>
                            <div className="media" id="rentPaymentsWrap">
                                <div className="pull-left">
                                    <img src="https://cdngeneral.rentcafe.com/images/money.png" alt=""/>
                                </div>
                                <div className="media-body">
                                    <h2 className="media-heading"> Make Payments </h2>
                                    <p>Pay online, check the status of your payments and review your payment history.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="media" id="maintReqWrap">
                                <div className="pull-left">
                                    <img src="https://cdngeneral.rentcafe.com/images/resources.png" alt=""/>
                                </div>
                                <div className="media-body">
                                    <h2 className="media-heading">Maintenance Requests</h2>
                                    <p>Submit online maintenance requests.</p>
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

export default connect(mapStateToProps)(Resident);
