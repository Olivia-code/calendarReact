// import logo from './logo.svg';
import './App.css';
import schedule from './data/schedule.js'
import Days from './components/Days.js'
import React, { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div className="calendarHeader">
        <h1>Social Calendar</h1>
        <Days/>
      </div>
    )
  }
}

export default App

