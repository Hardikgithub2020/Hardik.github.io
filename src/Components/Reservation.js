import React, { Component } from 'react';
import { Button,  Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

import '../CSS/Reservation.css'

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {reserve: [], isLoading: true};
    }
    async componentDidMount() {
        try{
                const response = await axios.get("https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications");
                this.setState({reserve: response.data, isLoading: false});
                
            }
        catch(e){
                console.log("Error", e)
            }
    }

    async remove(id) {
        console.log(id);
        try{
                const response = await axios.delete(`https://cors-anywhere.herokuapp.com/https://secure-escarpment-96068.herokuapp.com/application_api/v1/applications/${id}`);
                console.log(response.data);
                let update = this.state.reserve.filter(i => i.id !== id);
                this.setState({reserve: update})
            }
        catch(e){
                console.log("Error", e)
            }
    }

    render(){
    
       return(
        <div className="manage-container">
            <Table  striped bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Apartment Type</th>
                        <th>Starting Date</th>
                        <th>Lease Duration</th>
                        <th>Occupation</th>
                        <th>Number of Resident</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.reserve.map((res) =>
                        <tr key={res.id}>
                            <td>{res.firstName}</td>
                            <td>{res.lastName}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>{res.apartmentType}</td>
                            <td>{res.startingDate}</td>
                            <td>{res.leaseDuration}</td>
                            <td>{res.occupation}</td>
                            <td>{res.numberOfResident}</td>
                            <td> <Link to={"/editReservation/" + res.id}> <Button>Edit</Button> </Link></td>
                            <td><Button onClick={() => this.remove(res.id)}> Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
       );
   }
}