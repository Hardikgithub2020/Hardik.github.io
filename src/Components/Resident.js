import React, { Component } from 'react';
import '../CSS/Applicant.css'
import { connect } from 'react-redux';
import * as actions from '../actions/userActions';


class Resident extends Component {
    constructor(props){
        super(props);
       
        this.state={
            user_firstName : '',
            user_lastName :'',
            user_email : '',
            user_password :'',
        };
    }
    
    handleSubmit=(event)=>{

        this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
        event.preventDefault();
    }
    render() {
        
        return (
            <div className="Resident">
                
                <form onSubmit={this.handleSubmit}>
                   
                    <div className= 'applicant-form'>
                        <h1>RESIDENT PORTAL</h1>
                        <br/>
                        First Name <br/>
                        <input type="text" value={this.state.user_firstName} onChange={(e)=>this.setState({user_firstName : e.target.value})}/>
                        <br/>Last Name <br/>
                        <input type="text" value={this.state.user_lastName} onChange={(e)=>this.setState({user_lastName : e.target.value})}/>
                        <br/>Email <br/>
                        <input type="text" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})}/>
                        <br/>Password<br/>
                        <input type="password" value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                        <br/>
                        <input type="submit"/>
                    </div>

                </form>    
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    
    return state;
};

export default connect(mapStateToProps)(Resident);