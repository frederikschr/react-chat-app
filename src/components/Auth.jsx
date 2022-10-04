
import { useNavigate } from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'
import RoutePaths from '../routePaths'

const Auth = () => {

  const navigate = useNavigate();

  return (
    <div className="auth">
      
      <Greeting />
  
      <div className="auth-buttons">
        <button onClick={() => navigate(RoutePaths.LOGIN)}>Login</button>
        <button onClick={() => navigate(RoutePaths.REGISTER)}>Register</button>
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






