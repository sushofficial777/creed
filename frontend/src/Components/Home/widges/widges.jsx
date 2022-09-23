import React, { useEffect, useState } from 'react';
import './widges.css';
import { RiTeamLine } from 'react-icons/ri';
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {AiOutlineTeam} from 'react-icons/ai'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Person4Icon from '@mui/icons-material/Person4';
import ApartmentIcon from '@mui/icons-material/Apartment';
const Widges = ({ type }) => {
  let data;

  const [manager, setManager] = useState("0");
  const [teamlead, setTeamlead] = useState("0");
  const [employee, setEmployee] = useState("0");

  console.log(manager.data);
  const fetchManager = () => {
    fetch('/countmanager').then((res) => {
      // console.log(res);
      return res.json();

    }).then((managerData) => {
      const managerCount = managerData;
      setManager(managerCount);

    })
  }
  const fetchTeamleader = () => {
    fetch('/countteamlead').then((res) => {
      // console.log(res);
      return res.json();

    }).then((teamleadData) => {
      const teamleadCount = teamleadData;
      setTeamlead(teamleadCount);

    })
  }

  const fetchEmployee = () => {
    fetch('/countemployee').then((res) => {
      // console.log(res);
      return res.json();

    }).then((employeeData) => {
      const employeeCount = employeeData;
      setEmployee(employeeCount);

    })
  }



  useEffect(() => {
    fetchTeamleader();
    fetchEmployee();
    fetchManager();
  }, [])
  //temporary

  const diff = 20;

  switch (type) {
    case "manager":
      data = {
        title: "MANAGERS",
        count: manager.data,
        link: "See all manager",
        icon: (
          <Person4Icon
            className="icon"
            style={{
              color: "crimson",
           
            }}
          />
        ),
      };
      break;
    case "teamlead":
      data = {
        title: "TEAMLEADERS",
        count: teamlead.data,
        link: "See all teamleaders",
        icon: (
          <PeopleAltIcon
            className="icon"
            style={{
             
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "EMPLOYEES",
        count: employee.data,
        link: "See all employees",
        icon: (
          <Diversity3Icon
            className="icon"
            style={{  color: "green" }}
          />
        ),
      };
      break;
    case "department":
      data = {
        title: "DEPARTMENT",
        count: manager.data,
        link: "See all departments",
        icon: (
          <ApartmentIcon 
            className="icon"
            style={{
             
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget-up">
        <div className="widget-count">
          <h3>{data.count}</h3>
        </div>
        <div className="widget-title">
          <h3>{data.title}</h3>
        </div>
      </div>
      <div className="widget-down">
        <div className="widget-link">
          <h3>{data.link}</h3>
        </div>
        <div className="widget-icon">
          {data.icon}
        </div>
      </div>



    </div>
  );
};

export default Widges;
