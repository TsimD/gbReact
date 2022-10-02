import React from 'react';
import Chats from "../Chats";
import Message from "../Message";

function ChatsCont ({chats}) {
  return (
      <div className="conteiner">
        <Chats chats={chats}/>
        <Message/>

      </div>
  );
}

export default ChatsCont;