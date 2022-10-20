import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../../redux/reducers/messagesSelector";


const SingleChat = () => {

  const [text, setText]= useState('');
  const messages = useSelector(messagesSelector);
  const  {id}= useParams()
  const dispatch = useDispatch();
  const messagesAdd = ()=>{
    const mes = {
      id: Number(id),
      text: text
    }
    dispatch({type: 'add', payload: mes})
  }



  // const {id} = useParams();
  //
  // const messages=messageList.filter((message)=>{
  //   if(!id) return true
  //
  //   return message.chatId===Number(id)
  // })
  return (
      <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={messagesAdd}>Отправить</button>
        {messages.map((message)=>{
          return(
              <div key={message.id} style={{margin:'10px'}}>
                {message.text}
              <button onClick={()=>dispatch({type: 'delete', payload: message.id})}>Удалить</button>
              </div>
          )
        })}

      </div>
  );
};

export default SingleChat;
