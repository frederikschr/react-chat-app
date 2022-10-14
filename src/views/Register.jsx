

import { useEffect, useState } from 'react'
import registerUser from '../firebase/auth/registerUser'

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      registerUser(username, password, email);
    } else {
      console.log('Passwords do not match');
    }
    
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" placeholder="Enter username"/> 
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password"/>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="password" className="form-control" placeholder="Re enter password"></input>
        </div>

        <button onClick={handleRegistration} type="submit">Sign Up</button>

      </form>


    </div>
  )
}

export default Register;
