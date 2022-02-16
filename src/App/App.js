import React, { Component } from 'react';
import { fetchReservations,postReservation,deleteReservation } from '../apiCalls';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      reservations: [],
    }
  }
  componentDidMount(){
    fetchReservations().then(allReservations => this.setState({reservations: allReservations}))
    .catch(err => err.message)
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      <Form />
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
