import React, { useState, useEffect, useRef } from 'react';
import './Graph.css'
import OrganizationalChart from "./chart/orgChart";
import employees from "./data";
import Sidebar from '../../Sidebar/Sidebar';




const Graph = () => {

  return (
    <>
      <Sidebar />
      <div className="graph-wrapper">
        <div className="graph">
        <OrganizationalChart data={employees} />
          
        
        </div>
      </div>

    </>
  );
}

export default Graph;
