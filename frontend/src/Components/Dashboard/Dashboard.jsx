import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import  Menubar from '../Menubar/Menubar'
import Home from '../Home/Home';
import ChatBox from '../Chat/ChatBox/ChatBox';

const Dashboard = () => {
    return (
      <>
      <ChatBox/>
      <Sidebar/>
      <Menubar/>
      <Home/>

      </>
    );
}

export default Dashboard;
