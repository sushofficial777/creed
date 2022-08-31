import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import  Menubar from './Menubar/Menubar'
import Home from '../Home/Home';

const Dashboard = () => {
    return (
      <>
      <Sidebar/>
      <Menubar/>
      <Home/>

      </>
    );
}

export default Dashboard;
