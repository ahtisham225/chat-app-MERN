import React from 'react'
import "./ChatComponent.css"
import { Avatar} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
function ChatComponent() {
  return (
    <div className='chat-component'>
      <div className='chat__header'>
        
        <div className='chat__headerLeft'>
          <IconButton>
            <Avatar />
          </IconButton>
          <div className='chat__headerInfo'>
            <h3>Room Name</h3>
          </div>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon /> 
          </IconButton>
      
        </div>


      </div>

      <div className='chat__body'>

        <div className='chat__send'>
          <div className='chat_message'>
          This is a message Hello how are you man
          
          
          <span className='chat__timestamp'>
            {new Date().toUTCString().split(" ")[4]}
            
          </span>
          </div>
        </div>

        <div className='chat__received'>
          
          <div className='chat_message chat_recieve'>
            <span className='chat__name'>Siddharth</span>
            This is a message
            This is a messageThis is a messageThis is a messageThis is a message
            <span className='chat__timestamp'>
              {new Date().toUTCString().split(" ")[4]}
            </span>
          </div>
        </div>
        
      </div>
      
      <div className='chat__footer'>
        
        <IconButton>
            <InsertEmoticonIcon />
      
        </IconButton>
        <IconButton>
        
            <AttachFileIcon />
        </IconButton>
      
          <input placeholder='  Type a message' type='text' />
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>

    </div>
  )
}

export default ChatComponent
