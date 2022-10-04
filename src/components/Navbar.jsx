import { Outlet, Link } from "react-router-dom";
import RoutePaths from "../routePaths";
import logoutUser from "../firebase/auth/logoutUser";
import "../styles/Navbar.css"

const Navbar = () => {

  return (
    <div className="navbar">
      <nav>
        <ul>
          {}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={RoutePaths.ABOUT}>About</Link>
          </li>
          <li>
            <button onClick={() => logoutUser()}>Logout</button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Navbar;