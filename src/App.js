import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import SideBar from "./components/sideBar";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import Account from "./components/account";

function App() {
  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <SideBar />
        <div className='rightContent'>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
