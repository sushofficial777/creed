import logo from './logo.svg';
import './App.css';
import Login from './Components/pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Manager from './Components/pages/Manager/Manager';
import NewManager from './Components/pages/Manager/NewManager/NewManager';
import NewEmployee from './Components/pages/Employee/NewEmployee/NewEmployee'
import NewTeamLead from './Components/pages/TeamLead/NewTeamLead/NewTeamLead';
import NewDepartment from './Components/pages/Department/NewDepartment/NewDepartment';
import NewCompany from './Components/pages/Company/NewCompany/NewCompany';
import Employee from './Components/pages/Employee/Employee';
import Graph from './Components/pages/Graph/Graph';
import CmpanyLocationMap
 from './Components/pages/Company/NewCompany/Cmpany-location-map/Cmpany-location-map';
 import AutocompleteLocation from './Components/pages/Autocomplete-location/Autocomplete-location';
import ShowMap from './Components/pages/Map/ShowMap'
import CompanyMap from './Components/pages/Map/CompanyMap';


const App =() => {
  return (
    <Routes>

      {/* <Route exact path="" element={<ProtectedRoute Component={AdminLogin} />} /> */}

      <Route exact path="/" element=<Login/> />
      <Route exact path="/admin/Dashboard" element=<Dashboard/> />
      <Route exact path="/admin/Graph" element=<Graph/> />
      <Route exact path="/admin/Dashboard/managers/list" element=<Manager/> />
      <Route exact path="/admin/Dashboard/employees/list" element=<Employee/> />
      <Route exact path="/admin/Dashboard/managers" element=<NewManager/> />
      <Route exact path="/admin/Dashboard/teamleads" element=<NewTeamLead/> />
      <Route exact path="/admin/Dashboard/departments" element=<NewDepartment/> />
      <Route exact path="/admin/Dashboard/company" element=<NewCompany/> />
      <Route exact path="/admin/Dashboard/employees" element=<NewEmployee/> />
      <Route exact path="/admin/Dashboard/aut" element=<CmpanyLocationMap/> />
      <Route exact path="/admin/Dashboard/map" element=<CompanyMap/> />

      
      {/* <Route exact path="/admin/Dashboard/user" element={<ProtectedRoute Component={User} />} />
      <Route exact path="/admin/sign-out" element={<ProtectedRoute Component={} />} />
      <Route exact path="/admin/Dashboard/user/create" element={<ProtectedRoute Component={CreateUser} />} /> */}
    </Routes>

  );
}

export default App;
