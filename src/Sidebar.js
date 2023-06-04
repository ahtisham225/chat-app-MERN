import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import CloseIcon from '@mui/icons-material/Close';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='header__right'>
        
        <div className='header__left__icon'>
          <IconButton>
            <Avatar src= "data:image/jpeg;base64,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" />
          </IconButton>
        </div>
        
        <div className='header__right__icon'>
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton><IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
              
            <IconButton>
              <SearchOutlinedIcon />
              </IconButton>
              <input placeholder='Search or start new chat' type='text' />
            </div>
            <IconButton>
              <FilterListIcon/>
            </IconButton>
      </div>

      <div className='sidebar__notified'>
        <div className='sidebar__notified__left'>
          <div className='sidebar__notified__bell_icon'>
            <IconButton>
              <NotificationsOffIcon style={{fill: "#53bdeb"}} />
            </IconButton>
          </div>
          <div className='sidebar__notified__text'>
            Get Notified of new messages
            <p>Turn on Desktop Notifications &#62;</p>
          </div>
        </div>
          <div className='sidebar_notified_cross'>
            <IconButton>
              <CloseIcon style={{fill: "white"}}/>
            </IconButton>
          </div>
      </div>


      <div className='sidebar__chats'>
        <SidebarChat />
      </div>

    </div>
  )
}

export default Sidebar
