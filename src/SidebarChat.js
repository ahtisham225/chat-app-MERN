import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material';
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h3>Room Name</h3>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat;
