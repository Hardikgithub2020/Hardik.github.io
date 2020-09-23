import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import '../CSS/Owner.css'



class Owner extends Component {
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
           this.setState({ error: true,login:false });
           alert("login failed")
           this.props.dispatch({
            type: actions.GET_LOGIN_SUCCESS,
            payload: this.state,
        });
        }else{
            alert("login successful")
            this.setState({ error: false,login:true });
            
            this.props.dispatch({
                type: actions.GET_LOGIN_SUCCESS,
                payload: this.state,
            });
            this.props.history.push('/Reservation');

            
        }
        event.preventDefault();
      }

   
        
    render() {
        
        return (
            <div className="Owner"style={{padding:"15%"}}>
            <div className="container">
            <div className="card  " style={{maxWidth:"25rem",backgroundColor:"#e4f0ee" }} >
                <h4 className="card-header">LogIn</h4>  

                <div className= "card-body  text-left">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Email </label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="applicant@mail" value={this.state.user_email} onChange={(e)=>this.setState({user_email : e.target.value})} />
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="1234"value={this.state.user_password} onChange={(e)=>this.setState({user_password : e.target.value})}/>
                        </div>
                        <div className="text-right">
                        <button type="submit" className="btn btn-primary  pull-right">Submit</button>
                        </div>
                    </form>
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

export default withRouter(connect(mapStateToProps)(Owner));