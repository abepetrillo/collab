import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Rooms from './Rooms'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">rooms</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/rooms" component={Rooms}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default BasicExample
