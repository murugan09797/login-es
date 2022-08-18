import logo from './logo.svg';
import './App.css';
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
<>
<Router>
<ToastContainer/>
     <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> 

    </Routes>
  </Router>
</>
  );
}

export default App;
