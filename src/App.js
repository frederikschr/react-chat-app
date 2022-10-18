import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContext, auth } from './firebase/app';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';
import { RouteMap } from './constants/routes';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [userAuthState] = useAuthState(auth);

  return (
    <div className="App">
      <UserAuthContext.Provider value={userAuthState}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' index element={<Home />} />
            {
              Object.values(RouteMap).map((route) => {
                return <Route key={route} path={route.path} element={route.component} />
              })
            }
          </Routes>
        </Router>
      </UserAuthContext.Provider>
    </div>
  );
}

export default App;
