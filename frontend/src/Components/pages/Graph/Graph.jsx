import React, { useState, useEffect, useRef } from 'react';
import './Graph.css'
import OrganizationalChart from "./chart/orgChart";
import employees from "./data";
import Sidebar from '../../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';


const Graph = (props) => {
  const [data, setData] = useState([]);
  //   const [monk , setMonk] = useState([]);
  // console.log(monk);
  const obData = { ...data };
  // const employees = obData.data;
  //  console.log(employees.length);
  // console.log(Object.keys(employees).length);
  const finalData = new Array();
  // const fData = [data = finalData]
  console.log(finalData);
  for (const item in employees) {
    // console.log(item);
    const orgData = {
      id: employees[item]._id,
      parentId: employees[item].parentId,
      firstName: employees[item].firstName,
      role: employees[item].role,
      phone: employees[item].phone,
      email: employees[item].email,
      team: "",
      location: "",
      department: "",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    }
    finalData.push(orgData);
    // setMonk([orgData]);
  }

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
    // func();

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
