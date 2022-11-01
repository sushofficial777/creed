import logo from './logo.svg';
import { useState, useEffect} from 'react'
import './App.css';
import Login from './Components/pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Manager from './Components/pages/Manager/Manager';
import NewManager from './Components/pages/Manager/NewManager/NewManager';
import NewEmployee from './Components/pages/Employee/NewEmployee/NewEmployee'
import NewTeamLead from './Components/pages/TeamLead/NewTeamLead/NewTeamLead';
import TeamLead from './Components/pages/TeamLead/TeamLead';
import NewDepartment from './Components/pages/Department/NewDepartment/NewDepartment';
import NewCompany from './Components/pages/Company/NewCompany/NewCompany';
import Employee from './Components/pages/Employee/Employee';
import Graph from './Components/pages/Graph/Graph';
import CmpanyLocationMap
 from './Components/pages/Company/NewCompany/Cmpany-location-map/Cmpany-location-map';
 import AutocompleteLocation from './Components/pages/Autocomplete-location/Autocomplete-location';
import ShowMap from './Components/pages/Map/ShowMap'
import CompanyMap from './Components/pages/Map/CompanyMap';
import ProtectedRoute from './Components/ProtectedRoute';
import ClipLoader from "react-spinners/ClipLoader";
import LoginProtection from './Components/loginProtection';
import Company from './Components/pages/Company/Company';
import Department from './Components/pages/Department/Department';


const App =() => {
  const navigate = useNavigate();
  const pro = false;  

  return (

<>

    <Routes>

      {/* <Route exact path="" element={<ProtectedRoute Component={AdminLogin} />} /> */}

      <Route exact path="/" element={<LoginProtection Component={Login}/>}  />
      <Route exact path="/admin/Dashboard" element={<ProtectedRoute Component={Dashboard} />} />
      <Route exact path="/admin/Graph" element={<ProtectedRoute Component={Graph} />}  />
      <Route exact path="/admin/Dashboard/managers" element={<ProtectedRoute Component={Manager} />} />
      <Route exact path="/admin/Dashboard/companies" element={<ProtectedRoute Component={Company} />} />
      <Route exact path="/admin/Dashboard/employees" element={<ProtectedRoute Component={Employee} />} />
      <Route exact path="/admin/Dashboard/teamleads" element={<ProtectedRoute Component={TeamLead} />} />
      <Route exact path="/admin/Dashboard/departments" element={<ProtectedRoute Component={Department} />} />
     

      <Route exact path="/admin/Dashboard/managers/new" element={<ProtectedRoute Component={NewManager} />} />
      <Route exact path="/admin/Dashboard/teamleads/new" element={<ProtectedRoute Component={NewTeamLead} />} />
      <Route exact path="/admin/Dashboard/departments/new" element={<ProtectedRoute Component={NewDepartment} />} />
      <Route exact path="/admin/Dashboard/company/new" element={<ProtectedRoute Component={NewCompany} />} />
      <Route exact path="/admin/Dashboard/employees/new" element={<ProtectedRoute Component={NewEmployee} />} />
      <Route exact path="/admin/Dashboard/aut" element=<CmpanyLocationMap/> />
      <Route exact path="/admin/Dashboard/map" element={<ProtectedRoute Component={CompanyMap} />} />

      
      {/* <Route exact path="/admin/Dashboard/user" element={<ProtectedRoute Component={User} />} />
      <Route exact path="/admin/sign-out" element={<ProtectedRoute Component={} />} />
      <Route exact path="/admin/Dashboard/user/create" element={<ProtectedRoute Component={CreateUser} />} /> */}
    </Routes>

    </>
  );
}

export default App;
