import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "./Style/Chats.css"


function Chats ({chats}) {

  return (
      <div className='chatsList' >
    {
      chats.map(el=>{
        return(<List>
                  <ListItem>
                    <ListItemIcon>
                      <FolderSharedIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={el.name}/>
                  </ListItem>


                </List>

            )

      } )
    }
  </div>


)


}

export default Chats;
