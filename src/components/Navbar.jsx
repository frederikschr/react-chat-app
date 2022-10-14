import { Outlet, Link } from "react-router-dom";
import  { RouteMap } from "../constants/routes";
import logoutUser from "../firebase/auth/logoutUser";
import "../styles/Navbar.scss"
import Sidebar from './Sidebar'
import { useContext } from 'react';
import { UserAuthContext } from "../firebase/app";

const Navbar = () => {

  const user = useContext(UserAuthContext);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to={RouteMap.About.path}>About</Link>
          </li>
          {user !== null && 
            <li>
              <button onClick={() => logoutUser()}>Logout</button>
            </li>
          }
          <li>
            <Sidebar />
          </li>

        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Navbar;