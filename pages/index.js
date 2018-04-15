import React, { Component } from 'react';
import Router from 'next/router';
import * as firebase from "firebase";

import BarList from '../components/BarList';

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

function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};


export default class Index extends Component {
  state = {
    bars: [{name: 'example', eventCost: '$5', eventName: 'test'}],
    atkins: false,
    willy: false,
    state: false
  }

  buildBarObject = (barName, eventCost, eventName) => {

    this.state.bars.push({name: barName, eventCost: eventCost, eventName: eventName})
  }

  locationButtonClicked = (street) => {
    // get data from firebase db using street param
    firebase.database().ref('/' + street + '/').once('value').then((snapshot) => {
      const bars = snapshotToArray(snapshot)[0];
      const barsArr = Object.values(bars)
      // pass data from firebase to function
      barsArr.map(bar => bar.barName ? this.buildBarObject(bar.barName, bar.eventCost, bar.eventName) : null);
      console.log(barsArr)
    });
    setTimeout(() => { this.setState({atkins: true}) }, 500);
  }
  
  render() {

    let listOfBars = (
      <div>
        {this.state.bars.map((bar) => {
          return <BarList
            // click={() => this.checkedItem(index)}
            name={bar.name}
            eventCost={bar.eventCost}
            eventName={bar.eventName} />
        })}
      </div>
    );

    return (
      <div className="app">
        <h1> Choose your <strike>destiny</strike> street </h1>
        <button onClick={() => Router.push('/CMS/addEvent')}>ADD YOUR EVENT</button>
        <div className="streetSelection">
          <button className="streetBtn" onClick={() => this.state.willy ? null : this.locationButtonClicked('willy')}>Willy Street</button>
          <button className="streetBtn" onClick={() => this.state.atkins ? null : this.locationButtonClicked('atkins')}>Atkins Street {this.state.atkins ? <span>X</span> : null}</button>
          <button className="streetBtn" onClick={() => this.state.state ? null : this.locationButtonClicked('state')}>State Street</button>
        </div>
          {listOfBars}
      <style jsx>{`
      .app {
          margin: auto;
          width: 80%;
          padding: 10px;
      }
      h1{
        text-align: center;
      }
      .streetSelection {
        margin: auto;
        padding: 10px;
        border: 2px solid #000;
      }
      .streetBtn {
        width: 150px;
        height: 50px;
        border: 1px solid #000;
        border-radius: 3px;
        margin: 1% 2%;
        font-size: 12px;
      }
      .streetBtn:hover {
        cursor: pointer;
        background-color: #eee;
      }

      button:focus {outline:0;}
    `}</style>
      </div>
    );
  }
}