import React from 'react'
import Statusmessage from './components/Statusmessage'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  let username = "Lakshmi Narasimhan";
  let userstatus = "Online";

  let username2 = "Someone";
  let userstatus2 = "Offline";

  let userloggedin = true;
  let userRole = "super-admin"; // admin , buyer , seller
  return (
    <div>
      {/* props with component reuseable method */}
      <Statusmessage name={username} status = {userstatus} />
      <Statusmessage name={username2} status={userstatus2} />

      <h4>Authentication</h4>
      <Login />
      <Register />
      <Dashboard loginstatus={userloggedin} role={userRole} />
    </div>
  )
}

export default App  