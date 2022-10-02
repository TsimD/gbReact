import '../Style/App.css';
import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import ChatsCont from "./pages/ChatsCont";
import HomePage from "./pages/HomePage";


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

  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/chats'} element={<ChatsCont chats={chats}/>}/>
        </Route>
      </Routes>


)
  ;
}

export default App;
