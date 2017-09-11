import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formsy from 'formsy-react';
import Input from './input';


class App extends Component {

  submit() {
    console.log('create room')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Collab</h2>
        </div>
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <label>
            Room name:
          </label>
          <Input name="email" validations="isEmail" validationError="This is not a valid email" required/>
          <button type="submit">Submit</button>
        </Formsy.Form>
      </div>
    );
  }
}

export default App;
