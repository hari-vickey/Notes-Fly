import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './auth.css';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({username: '', mail: '', password: ''});

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
    Axios.post('http://localhost:8000/api/auth', user)
    .then((res) => {
      console.log(res.data.message);
      navigate('/home', {state: {data: user.username}});
      setUser({username: '', mail: '', password: ''});
    }).catch((err) => {
      console.log("Error");
      console.log(err.message);
      navigate('/error');
    });
  }

  // function googleAuth(e) {
  //   console.log(e);
  //   Axios.get('http://localhost:8000/api/auth/auth/google').then((res) => {
  //     console.log(res.data.message);
  //   }).catch((err) => {
  //     console.log("Error");
  //     console.log(err.message);
  //     navigate('/error');
  //   });
  // }

  return (
    <div className='center'>
      <div className="login-form">
        <form onSubmit={submitForm}>
          <img src="images/notes-fly.png" alt="notes-fly" width="100"/>
          <h1 className="app-heading">Notes Fly</h1>
          <div className="form-floating">
            <input required type="text" name="username" className="top form-control" value={user.username}
              placeholder="username" onChange={handleChange}/>
            <label htmlFor="username">Full Name</label>
          </div>
          <div className="form-floating">
            <input type="email" name="mail" className="middle form-control" value={user.mail}
              placeholder="Gmail" onChange={handleChange} />
            <label htmlFor="mail">Gmail</label>
          </div>
          <div className="form-floating">
            <input required type="password" name="password" className="bottom form-control" value={user.password}
            placeholder="password" onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg auth-btn" type="submit">Register</button>
        </form>
        <div className="separator"><p>or</p></div>
        <button className="w-100 btn btn-lg auth-btn"
        onClick={""}>
          <i className="fab fa-google"></i> Register using Google
        </button>
      </div>
    </div>
  );
}

export default Register;