import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import NotesFly from './App/NotesFly';

export default function App() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);

  const getUser = async () => {
    try {
      await fetch(process.env.REACT_APP_AUTH_URL + '/validate', {
        method:'GET', credentials: 'include', mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials':true
        }
      }).then((res) => {
        if(res.status === 200) return res.json();
        else throw new Error("authentication has been failed!");
      }).then((object) => {
        setUser(object.user.name);
        setMail(object.user.mail);
      });
    } catch (err) { console.log(err); }
  }

  useEffect(() => {
    getUser();
  }, []);

  function GoogleAuth() {
    return (
      <div>
        {window.open(process.env.REACT_APP_AUTH_URL + '/google', '_self')}
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