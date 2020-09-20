import React, { Component } from 'react';
//import '../CSS/Resident.css'
import SignInForm from './SignInForm';


class Resident extends Component {
  
    render() {
        let message="RESTDENT PORTAL"
        let alertMessage="Successfully login"
        return (

                <div className="card" style={{margin:"10%"}}>
                    
                <div className="card-group" >
                    <div className='card-body'>
                        <div style={{backgroundColor:"#e4f0ee"}}>
                        <SignInForm message={message} alertMessage={alertMessage}/> 
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
export default Resident;