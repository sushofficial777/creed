import React,{useEffect,useState} from 'react';
import './widges.css';
import {RiTeamLine} from 'react-icons/ri';

const Widges = ({type}) => {
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
          const teamleadCount =teamleadData;
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
        count:manager.data,
        link: "See all manager",
        icon: (
          <RiTeamLine
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "teamlead":
      data = {
        title: "TEAMLEADERS",
        count:teamlead.data,
        link: "See all teamleaders",
        icon: (
          <RiTeamLine
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "EMPLOYEES",
        count:employee.data,
        link: "See all employees",
        icon: (
          <RiTeamLine
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "department":
      data = {
        title: "DEPARTMENT",
      count:manager.data,
        link: "See all departments",
        icon: (
          <RiTeamLine
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
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
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widges;
