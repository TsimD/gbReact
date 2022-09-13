import React from 'react';
import "./Style/Message.css"

function Message (props) {
  return (
      <h1 className="textMessage">{props.text}</h1>
  );
}

export default Message;