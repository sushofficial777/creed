import React from 'react';
import './Menubar.css'
import { FiSearch } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'



const Menubar = () => {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menubar-items">
          <div className="menu-left">
            <div className="menu-logo">
              <h1>Creed Infotech</h1>
            </div>
            <div className="menu-search">
              <div className="search">
                <input type="text" />
              </div>
              <FiSearch />
            </div>
          </div>
          <div className="menu-right">
            <div className="menu-items">
              <div className="notification">  <IoMdNotificationsOutline /> </div>
              <div className="messages">  <FiMail /> </div>
              <div className="menu-user-account">
                <img src="" alt="user-image" />
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}

export default Menubar;
