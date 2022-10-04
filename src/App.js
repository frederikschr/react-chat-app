import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContext, auth } from './firebase/app';
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login';
import Register from './views/Register';
import RoutePaths from './routePaths'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [userAuthState] = useAuthState(auth);
  
  return (
    <div className="App">
      <UserAuthContext.Provider value={userAuthState}>
        <Router>
          <Navbar />  
          <Routes>
              <Route path="/" index element={<Home />} />
              <Route path={RoutePaths.ABOUT} element={<About />} />
              <Route path={RoutePaths.LOGIN} element={<Login />} />
              <Route path={RoutePaths.REGISTER} element={<Register/>} />  
          </Routes>
        </Router>
      </UserAuthContext.Provider>
    </div>
  );
}

export default App;
