import './Style/App.css';
import React, {useEffect} from "react";
import Message from "../src/Message"
import Chats from "./Chats";


function App () {

  const chats =
      [{
        id: '',
        name: 'Друзья'
      }, {
        id: '',
        name: 'Семья'

      }, {
        id: '',
        name: 'Работа'

      }];

  return (<div className="conteiner">
        <Chats chats={chats}/>
        <Message/>

      </div>

  );
}

export default App;
