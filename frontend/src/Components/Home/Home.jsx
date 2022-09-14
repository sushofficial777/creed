import React from 'react';
import './Home.css';
import Widges from './widges/widges';

const Home = () => {
    return (
       <>
       <div className="home-wrapper">
       <div className="widgets">
          <Widges type="manager" />
          <Widges type="teamlead" />
          <Widges type="employee" />
          <Widges type="department" />
        </div>
       </div>
       
       </>
    );
}

export default Home;
