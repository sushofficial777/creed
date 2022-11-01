import React from 'react';
import './Sidebar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineTeam } from 'react-icons/ai'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { GrGraphQl } from 'react-icons/gr'
import {BsFillPinMapFill} from 'react-icons/bs'
import Logo from '../img/creedLogo.png'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



import { MdOutlineCancel } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import Image1 from '../img/img4.jpg'

const Sidebar = () => {
const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(true);
    const hideSidebar = () => {
        setSidebar(!sidebar);
        // console.log("clicked");
    }

  
  const userData =   window.localStorage.getItem("user");
  
  const data = JSON.parse(userData);
  const firstName = data.firstName;
  const lastName = data.lastName;
//   console.log(userName[0].toUpperCase());
  
  const userRole = data.role;

////****LogOut function */
  const logOut = () =>
  {
     
 const outData =   fetch('/logout').then((res)=>{
      if(res.status === 200){
        navigate("/");
      }
      
      });
      console.log(outData);
 
  }
 

    return (
        <>
            {
                sidebar ? <div className="sidebar-wrapper sidebar-inactive">
                    <div className="sidebar-menu-wrapper">

                        <div className="togle-btn"><MdOutlineCancel onClick={hideSidebar} /></div>
                        <div className="togle-btn1"><FiMenu /></div>
                        <div className="logo"><img src={Logo} alt="" /></div>
                        {/* <div className="user-account-sidebar">
                            <div className="user-image">
                                <img src={Image1} alt="" />
                            </div>
                            <div className="user-detail">
                                <h2>Sushil Kumar</h2>
                                <h3>Administrator</h3>

                            </div>

                        </div> */}
                        <ul className="sidebar-menu-items">
             
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><MdSpaceDashboard /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard"><h5>Dashboard</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><AddBusinessIcon /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/companies"><h5>Company</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><HiOutlineOfficeBuilding /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/departments"><h5>Departments</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><FaUserTie /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/managers"><h5>Managers</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><AiOutlineTeam /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/teamleads"><h5>Team Leaders</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><RiTeamLine /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/employees"><h5>Employees</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><BsFillPinMapFill /></div><div className="sidebar-menu-title"><Link to="/admin/Dashboard/map"><h5>Map</h5></Link></div></li>
                            <li className="sidebar-menu-item"><div className="sidebar-menu-icon"><GrGraphQl /></div><div className="sidebar-menu-title"><Link to="/admin/Graph"><h5>Graph</h5></Link></div></li>

                        </ul>

                        <div className="user-account-sidebar">
                            <div className="user-image">
                                <img src={Image1} alt="" />
                            </div>
                            <div className="user-detail">
                                <h2>{`${firstName[0].toUpperCase() + firstName.substring(1)} `}</h2>
                                <h3>{userRole[0].toUpperCase() + userRole.substring(1)}</h3>
                            
                            </div>

                        </div>
                  
                        <div className="logout">
                            <div className="logout-btn">
                                <button onClick={logOut}>Log-Out</button>
                            </div>
                        </div>

                    </div>

                </div> : null
            }
              <ToastContainer />
        </>
    );
}

export default Sidebar;
