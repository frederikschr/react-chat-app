
import { useNavigate } from 'react-router-dom'
import { googleUserLogin } from '../firebase/auth/loginUser'
import { RouteMap } from  '../constants/routes';

const Auth = () => {

  const navigate = useNavigate();

  return (
    <div className="auth">
      
      <Greeting />
  
      <div className="auth-buttons">
        <button onClick={() => navigate(RouteMap.Login.path)}>Login</button>
        <button onClick={() => navigate(RouteMap.Register.path)}>Register</button>
        <br></br>
        <button onClick={() => googleUserLogin()}>Sign in with Google</button>
      </div>
    </div>
  )

}

const Greeting = () => {
  return (
    <div className="greeting">
      <h1>Welcome to the Chat App</h1>
      <h4>the place where you can chat</h4>
    </div>
  )
}

export default Auth;






