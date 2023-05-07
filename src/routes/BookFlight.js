import Navbar from "../components/Navbar";

//src/App.js
import React from 'react';
 
class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.headers = [
            { key: 'FlightNumber', label: 'FlightNumber'},
            { key: 'DepartureAirport', label: 'DepartureAirport' },
            { key: 'ArrivalAirport', label: 'ArrivalAirport' },
            { key: 'Departure', label: 'Departure' },
            { key: 'Arrival', label: 'Arrival' },
            { key: 'AirplaneType', label: 'AirplaneType' },
            { key: 'TicketPrice', label: 'TicketPrice' },
            { key: 'Passengers', label: 'Passengers' }
        ];
    }
     
    componentDidMount() {
        fetch('http://localhost/devtest/Flights.php/').then(response => {
            console.log(response);
            return response.json();
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                flights_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const flightFound = this.state.flights_rs && this.state.flights_rs.length;
        if(flightFound) {
            return (
                <><Navbar /><div className="container"><h1>ReactJS Fetch Data from Database with PHP Mysql</h1><br/><br/><br/><br/><br/>
                    <div id="msg"></div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {this.headers.map(function (h) {
                                    return (
                                        <th key={h.key}>{h.label}</th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.flights_rs.map(function (item, index) {
                                return (
                                    <tr key={index}>
                                        <td>{item.FlightNumber}</td>
                                        <td>{item.DepartureAirport}</td>
                                        <td>{item.ArrivalAirport}</td>
                                        <td>{item.Departure}</td>
                                        <td>{item.Arrival}</td>
                                        <td>{item.AirplaneType}</td>
                                        <td>{item.TicketPrice}</td>
                                        <td>{item.Passengers}</td>
                                    </tr>
                                );
                            }.bind(this))}
                        </tbody>
                    </table>
                </div></>
            )
        } else {
            return (
                <><div id="container">
                    No product found
                </div></>
            )
        }
    }
    
}
export default App;