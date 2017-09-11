import React from 'react';
import { Route } from 'react-router-dom';
import Room from './Room'

const Rooms = ({ match }) => (
  <div>
    <Route path={`${match.url}/:roomId`} component={Room}/>
    <Route exact path={match.url} render=
      { () => (
        <h3>Rooms</h3>
      )}
    />
  </div>
)

export default Rooms
