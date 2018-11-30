import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addReminder} from './actions'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addReminder() {
    
    this.props.addReminder(this.state.text);
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Reminder Champ
        </div>
        <div className="App-form-inline">
          <div className="App-form-group">
            <input type="text"
            className="App-form-control"
            placeholder="Needs to do something..."
            onChange = {(event) => this.setState({text: event.target.value})}
            />
          </div>
          <button 
          className="btn btn-success" 
          type="button"
          onClick = {() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, {addReminder}) (App);
