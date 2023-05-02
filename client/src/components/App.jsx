import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import NotesFly from './App/NotesFly';

export default function App() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);
  console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    function getUser() {
      fetch('http://localhost:8000/api/auth/validate', {
        method:'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error('authentication has been failed!');
      }).then((object) => {
        setUser(object.user);
        setMail(object.mail);
      }).catch((err) => { console.log(err) });
    };
    getUser();
  },[]);

  function GoogleAuth() {
    return (
      <div>
        {window.open('http://localhost:8000/api/auth/google', '_self')}
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/app' /> : <GoogleAuth />} />
        <Route path='/app' element={<NotesFly mail={mail} user={user}/>} />
      </Routes>
    </Router>
  )
}