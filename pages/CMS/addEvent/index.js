import React, { Component } from 'react';
import Router from 'next/router';

import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyBflE79fHdIcTACJzodRtTyBWsBdBR8LYE",
    authDomain: "events-madcity.firebaseapp.com",
    databaseURL: "https://events-madcity.firebaseio.com/",
    projectId: "events-madcity",
    storageBucket: "events-madcity.appspot.com",
    messagingSenderId: "1000322236144"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  // Get a reference to the database service
  const database = firebase.database();

export default class AddEvent extends Component {
    state = {
        barName: '',
        eventName: '',
        eventPrice: ''
    }

    barNameInputChanged = (event) => {
        const changedName = event.target.value;
        this.setState( {barName: changedName} );
    }

    eventNameInputChanged = (event) => {
        const changedName = event.target.value;
        this.setState( {eventName: changedName} );
    }

    eventPriceInputChanged = (event) => {
        const changedName = event.target.value;
        this.setState( {eventPrice: changedName} );
    }

    writeUserData = () => {
        const street = 'atkins';
        const id = Math.floor(Math.random() * 9876543);

        firebase.database().ref('/' + street + '/bars/' + id + '/').set({
          barName: this.state.barName,
          eventName: this.state.eventName,
          eventPrice : this.state.eventPrice
        });
    }

    render() {
        return (
            <div>
                <button className="cancel" onClick={() => Router.push('/')}>X</button>
                <h1>Add Your's event</h1>
                <p>Bar Name<input type="text" onChange={this.barNameInputChanged} value={this.state.barName}/></p>
                <p>Event Name<input type="text" onChange={this.eventNameInputChanged} value={this.state.eventName}/></p>
                <p>Event Attendance<input type="text" onChange={this.eventPriceInputChanged} value={this.state.eventPrice}/></p>
                <button className="submit" onClick={() => this.writeUserData()}>ADD EVENT</button>
            </div>
        );
    }
}