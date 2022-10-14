
import { useState } from 'react';
import { defaultUserLogin } from '../firebase/auth/loginUser';
import '../styles/App.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    console.log(e)
    e.preventDefault();
    defaultUserLogin(email, password);
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email"/> 
        </div>

        <div className="form-group">
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password"/>
        </div>

        <button onClick={handleLogin} className="btn btn-primary btn-lock" type="submit">Login</button>
      </form>

    </div>
  )

}

export default Login;
