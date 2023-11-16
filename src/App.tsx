import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login';
import { users } from './data/users_data';
import { useLogin } from './context/LoginContext';
import { Dashboard } from './pages/Dashboard';
import { Footer } from './components/Footer';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useLogin();


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, [])
  return (
    <>
      {(!isLoggedIn) ?
        <Login/>
        :
        <Dashboard/>
      }
      <Footer/>
    </>
  );
}

export default App;
