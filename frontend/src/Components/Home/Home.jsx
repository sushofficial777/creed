import React from 'react';
import './Home.css'
import Widges from './widges/widges';

const Home = () => {
    return (
       <>
       <div className="home-wrapper">
       <div className="widgets">
          <Widges type="user" />
          <Widges type="order" />
          <Widges type="earning" />
          <Widges type="balance" />
        </div>
       </div>
       
       </>
    );
}

export default Home;
