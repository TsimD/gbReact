import React, {useState} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "../Style/Chats.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsSelector";


function Chats () {
const chats = useSelector(chatsSelector)
  return (
      <div className='chatsList' >
    {
      chats.map(chat=>{
        return(<List>

                  <ListItem>
                    <ListItemIcon>
                      <FolderSharedIcon/>
                    </ListItemIcon>
                    <Link key={chat.id} to={`/message/${chat.id}`}>
                      <ListItemText primary={chat.name}/>
                    </Link>

                  </ListItem>


                </List>

            )

      } )
    }
  </div>


)


}

export default Chats;
