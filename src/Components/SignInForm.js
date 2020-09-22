import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import axios from "axios"
import { withRouter } from 'react-router-dom';


class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user_email : '',
            user_password :'',
            userLogData:''
        };
    
        this.onSubmit = this.onSubmit.bind(this);

    }
    async componentDidMount() {
        try{
            const response = await axios.get("https://secure-escarpment-96068.herokuapp.com/hardik/users/api/v1/users");
                this.setState({userLogData: response.data});
                console.log(this.state.userLogData);
            }
        catch(e){
                console.log("Error", e)
            }
    }

    postAPI = async (formData) =>{
       
        try{
               await axios.post("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/hardik/users/api/v1/users", formData);
            
            }
        catch(e){
                console.log("Error", e)
            }
        }
    
    onSubmit=(event)=>{

        const { user_email} = this.state;
        const check_users = this.state.userLogData.filter(user => (user.email === user_email ));
      
       
        if(check_users.length > 0){

            alert("This email is already registered, register another email");
        }else{
                alert("Registration successfull");
                let formData ={ 
                    email : this.state.user_email,
                    password:this.state.user_password
                }
                this.postAPI(formData);
                this.props.dispatch({type: actions.GET_REGISTRATION_SUCCESS, payload: this.state});
                this.props.history.push('/Applicant');
                
        }
        event.preventDefault(); 
    }
    render() {
        
        return (
            <div className="SignInForm">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <h3>{this.props.message}</h3>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="applicant@mail" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="1234"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                        </div>
                        <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary text-right">Submit</button>
                        </div>
                     </form> 
                </div>
             </div>
            );
        }
}

const mapStateToProps = (state) => {
    return state;
    };

export default withRouter(connect(mapStateToProps)(SignInForm));