import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Axios from 'axios';
import Home from './Home/Home';
import NotesFly from './App/NotesFly';

export default function App() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);
  useEffect(() => {
    function getUser() {
      Axios.get(process.env.REACT_APP_AUTH_URL + '/validate',
      { withCredentials: true })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if(res.data.message === 'success') {
          console.log(res.data.message);
          setUser(res.data.user);
          setMail(res.data.mail);
        }
        else console.log(res.data.message);
      }).catch(err => console.log(err));
    };
    getUser();
  }, [user]);

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