import React, {useState} from 'react'
import "./ChatComponent.css"
import { Avatar} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import axios from './Axios';
function ChatComponent({messages, name}) {

  const [input, setInput] = useState('');
  const sendMessage = async (e)=>{
    e.preventDefault();
    await axios.post('/api/v1/messages/new',{
      message: input,
      name: name,
      timestamp: new Date().toUTCString().split(" ")[4],
      received: true,
  });
  setInput('');
}
  return (
    <div className='chat-component'>
      <div className='chat__header'>
        
        <div className='chat__headerLeft'>
          <IconButton>
            <Avatar src='https://wpjournalist.nl/wp-content/uploads/2021/09/myAvatar-1.png'/>
          </IconButton>
          <div className='chat__headerInfo'>
            <h3>Ahtisham's Chat Room</h3>
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
        {messages.map((message)=>(
          <div className={`chat_message ${(message.name !== name) && 'chat_recieve'}`}>
            {message.name !== name?(
              <span className='chat__name'>{message.name}</span>)
            :null}
            {message.message}
            <span className='chat__timestamp'>
              {message.timestamp}
            </span>
          </div>
        ))}
        {/* <div className='chat__send'>
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
        </div> */}
        
      </div>
      
      <div className='chat__footer'>
        
        <IconButton>
            <InsertEmoticonIcon />
      
        </IconButton>
        <IconButton>
        
            <AttachFileIcon />
        </IconButton>
        <form>
          <input value={input}
            onChange = {(e)=>setInput(e.target.value)}
            placeholder='  Type a message' type='text' />
          <button onClick = {sendMessage} type='submit'></button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>

    </div>
  )
}

export default ChatComponent
