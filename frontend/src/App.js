import logo from './logo.svg';
import './App.css';
import Login from './Components/pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Manager from './Components/pages/Manager/Manager';
import NewManager from './Components/pages/Manager/NewManager/NewManager';
import NewEmployee from './Components/pages/Employee/NewEmployee/NewEmployee'


const App =() => {
  return (
    <Routes>

      {/* <Route exact path="" element={<ProtectedRoute Component={AdminLogin} />} /> */}

      <Route exact path="/" element=<Login/> />
      <Route exact path="/admin/Dashboard" element=<Dashboard/> />
      <Route exact path="/admin/Dashboard/managers" element=<Manager/> />
      <Route exact path="/admin/Dashboard/managers/new" element=<NewManager/> />
      <Route exact path="/admin/Dashboard/employee/new" element=<NewEmployee/> />
      
      {/* <Route exact path="/admin/Dashboard/user" element={<ProtectedRoute Component={User} />} />
      <Route exact path="/admin/sign-out" element={<ProtectedRoute Component={} />} />
      <Route exact path="/admin/Dashboard/user/create" element={<ProtectedRoute Component={CreateUser} />} /> */}
    </Routes>

  );
}

export default App;
