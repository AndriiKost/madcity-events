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
    searchValue: ''
  }

  locationButtonClicked = (street) => {
    firebase.database().ref('/' + street + '/').once('value').then(function(snapshot) {
      console.log(snapshotToArray(snapshot)[0]['bar A'].name)
      snapshot.forEach((item) => {
        let itemVal = item.val()
        console.log(itemVal)
      })
    });
  }

  render() {
    return (
      <div>
        <h1> Choose your <strike>destiny</strike> street </h1>
        <div className="SearchArea">
          {/* <button onClick={() => Router.push('/streets/willy')}>Willy Street</button> */}
          <button onClick={() => this.locationButtonClicked('willy')}>Willy Street</button>
          <button onClick={() => this.locationButtonClicked('atkins')}>Atkins Street</button>
          <button onClick={() => this.locationButtonClicked('state')}>State Street</button>
        </div>
      </div>
    );
  }
}