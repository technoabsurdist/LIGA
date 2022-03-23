import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// CSS Styling
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
// import Login from "./components/Login/Login";
import { auth } from './firebase';
// import Widgets from "./components/Widgets/Widgets";
import Home from "./components/Home/Home"; 
import { Routes ,Route } from 'react-router-dom';

function App() {
  // Recently added line
  return (
    <main>
      <Routes>
        <Route path="/" component={<Home/>} exact /> 
        {/* <Route path="/register" component={<Register/>} />  */}
        {/* <Route path="/sign-in" component={<SignIn/>} />  */}
      </Routes>
      <div>
        <Home /> 
      </div> 
    </main>
    
  );
}

export default App;
