import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='header__right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton><IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='header__left'>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
