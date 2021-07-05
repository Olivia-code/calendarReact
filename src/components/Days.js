import React, { Component } from 'react'
import schedule from '../data/schedule.js'
import { render } from 'react-dom';

export class Days extends Component {
  constructor(props) {
    super(props)
    this.state = [];
  }
  render() {
    const daysOfWeek = []; 
    for(let i = 0; i < schedule.length; i += 1) {
      daysOfWeek.push(schedule[i]);
      console.log(daysOfWeek[i].goals)
    }
    return (
      <div>
        {this.daysOfWeek}
      </div>
    )
  }
}

export default Days
