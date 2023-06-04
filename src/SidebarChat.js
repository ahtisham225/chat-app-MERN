import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material';
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://wpjournalist.nl/wp-content/uploads/2021/09/myAvatar-1.png'/>
        <div className='sidebarChat__info'>
            <h3>Ahtisham's Chat Room </h3>
            <p>Write your name and Chat.</p>
        </div>
    </div>
  )
}

export default SidebarChat;
