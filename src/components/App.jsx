import '../Style/App.css';
import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import ChatsCont from "./pages/ChatsCont";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleChat from "./pages/SingleChat";


function App () {


  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/chats'} element={<ChatsCont />}/>
          <Route path={'/message/:id'} element={<SingleChat/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>


)
  ;
}

export default App;
