import React from 'react';

const Room = ({ match }) => (
  <div>
    <h3>You are in room {match.params.roomId}</h3>
  </div>
)

export default Room;
