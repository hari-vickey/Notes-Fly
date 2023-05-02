import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({fName: '', lName: '', mail: '', password: ''});

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevUser => {
      return {
        ...prevUser, [name]: value
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    Axios.post('http://localhost:8000/api/auth/register', user)
    .then((res) => {
      console.log(res.data.message);
      // navigate('/app', {state: {data: user.fName}});
      setUser({fName: '', lName: '', mail: '', password: ''});
    }).catch((err) => {
      console.log("Error");
      console.log(err.message);
      // navigate('/error', {state: {data: '/register'}});
    });
  }

  function googleAuth() {
    window.open('http://localhost:8000/api/auth/google', '_self');
  }

  return (
    <div className='center'>
      <div className="login-form">
        <form onSubmit={submitForm}>
          <img src="images/notes-fly.png" alt="notes-fly" width="100"/>
          <h1 className="app-heading">Notes Fly</h1>
          <div className="form-floating">
            <input required type="text" name="fName" className="top form-control" value={user.fName}
              placeholder="firstName" onChange={handleChange}/>
            <label htmlFor="fName">First Name</label>
          </div>
          <div className="form-floating">
            <input required type="text" name="lName" className="middle form-control" value={user.lName}
              placeholder="lastName" onChange={handleChange}/>
            <label htmlFor="lName">Last Name</label>
          </div>
          <div className="form-floating">
            <input required type="email" name="mail" className="middle form-control" value={user.mail}
              placeholder="Gmail" onChange={handleChange} />
            <label htmlFor="mail">Gmail</label>
          </div>
          <div className="form-floating">
            <input required type="password" name="password" className="bottom form-control" value={user.password}
            placeholder="password" onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg auth-btn" type="submit" disabled>Register</button>
        </form>
        <div className="separator"><p>or</p></div>
        <button className="w-100 btn btn-lg auth-btn"
        onClick={googleAuth}>
          <i className="fab fa-google"></i> Register using Google
        </button>
      </div>
    </div>
  );
}