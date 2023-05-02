import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import WebApp from './WebApp';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Error from './Auth/Error';

export default function App() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);
  useEffect(()=>{
    function getUser() {
      fetch("http://localhost:8000/api/auth/validate", {
        method:"GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      }).then((object) => {
        setUser(object.user);
        setMail(object.mail);
      })
      .catch((err) => { console.log(err) });
    };
    getUser();
  },[]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/app' /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/app' element={<WebApp mail={mail} user={user}/>} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  )
}