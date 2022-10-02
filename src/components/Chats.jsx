import React, {useState} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "../Style/Chats.css"
import {Link} from "react-router-dom";


function Chats () {

  const [chats, setChats]= useState([
    {
      id:1,
      name:'Natasha'
    },
    {
      id:2,
      name:'Miranda'
    },
  ])

  return (
      <div className='chatsList' >
    {
      chats.map(el=>{
        return(<List>

                  <ListItem>
                    <ListItemIcon>
                      <FolderSharedIcon/>
                    </ListItemIcon>
                    <Link to={`/message/${el.id}`}>
                      <ListItemText key={el.id}
                                    primary={el.name}/>
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
