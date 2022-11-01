import React, { useState, useEffect, useRef } from 'react';
import './Graph.css'
import OrganizationalChart from "./chart/orgChart";
import employees from "./data";
import Sidebar from '../../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const Graph = (props) => {

  const [data , setData] = useState([]);
  // console.log(data);
  const obData = {...data};
  const employee = obData.data;
 console.log(employee);


for (const item in employee) {
  const orgData = {
    id: item._id,
    
    firstName: employee[0].firstName,
    role: employee[0].role,
    phone: employee[0].phone,
    email: employee[0].email,
    team: "",
    location:"",
    department: "",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  }
  console.log(orgData);
}
  
  
  // console.log(orgData);
  
    /////////////////////////////////////LOAD ALL EMPLOYEE DATA//////////////////
  
  const fetchData = () => {
    fetch('/getalluserdata').then((res) => {
      // console.log(res);
      return res.json();
  
    }).then((employeeData) => {
      const data = employeeData;
      setData(data);
  
    })
  }
  useEffect(() => {
    fetchData();
    
  }, [])
 

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
