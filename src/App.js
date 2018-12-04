import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, clearReminder} from './actions'
import moment from 'moment';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }
  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  renderReminders() {
    const {reminders} = this.props;
    return (
      <ul className= "App-list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className= "App-list-group-item">
                <div className="App-list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div 
                className="App-list-item delete-button"
                onClick = {() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Reminder Champ
        </div>
        <div className="form-inline remineder-form">
          <div className="App-form-group">
            <input type="text"
            className="form-control"
            placeholder="Needs to do something..."
            onChange = {(event) => this.setState({text: event.target.value})}
            />
            <input
            className="form-control"
            type="datetime-local"
            onChange=  {(event) => this.setState({dueDate:event.target.value})}
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
        { this.renderReminders() }
        <div 
        className = "btn btn-danger"
        onClick = {() => this.props.clearReminder()}>
          Clear Reminder
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminder}) (App);
