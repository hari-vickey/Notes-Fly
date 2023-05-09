import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Axios from 'axios';
import Home from './Home/Home';
import NotesFly from './App/NotesFly';

export default function App() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);
<<<<<<< HEAD

  const getUser = async () => {
    try {
      const url = process.env.REACT_APP_AUTH_URL + '/validate';
      const {data} = await Axios.get(url, { withCredentials: true });
      setUser(data.user.name);
      setMail(data.user.mail);
    } catch (err) { console.log(err); }
  }

=======
>>>>>>> parent of ed72563 (Authentication Updated)
  useEffect(() => {
    function getUser() {
      fetch(process.env.REACT_APP_AUTH_URL + '/validate', {
        method:'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }).then((res) => {
        if(res.status === 200) return res.json();
        throw new Error('Authentication has been failed!');
      }).then((object) => {
        setUser(object.user);
        setMail(object.mail);
      }).catch(err => console.log(err));
    };
    getUser();
  });

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