import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const SingleChat = () => {
  const [messageList, setMessageList]= useState([
    {
      id:1,
      text:'hi',
      chatId:1
    },
    {
      id:2,
      text:'hello',
      chatId:2
    },
    {
      id:3,
      text:'=)',
      chatId:2
    },
    {
      id:4,
      text:'go ',
      chatId:2
    },
    {
      id:5,
      text:'ok',
      chatId:1
    },
  ]);

  const {id} = useParams();
  const messages=messageList.filter((message)=>{
    if(!id) return true

    return message.chatId===Number(id)
  })
  return (
      <div>
        {messages.map((message)=>{
          return(
              <div key={message.id} style={{margin:'10px'}}>
                {message.text} </div>
          )
        })}
      </div>
  );
};

export default SingleChat;
