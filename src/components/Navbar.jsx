import { Outlet, Link } from "react-router-dom";
import  { RouteMap, AuthorizedStatus } from "../constants/routes";
import logoutUser from "../firebase/auth/logoutUser";
import "../styles/Navbar.scss"
import Sidebar from './Sidebar'
import { useContext } from 'react';
import { UserAuthContext } from "../firebase/app";
import useWindowSize from "../custom_hooks/useWindowSize";

const Navbar = () => {

  const user = useContext(UserAuthContext);
  const userAuthStatus = user !== null ? AuthorizedStatus.AUTHORIZED : AuthorizedStatus.UNAUTHORIZED;
  const windowSize = useWindowSize();

  return (
    <div className="navbar">
      { windowSize.width > 700 ? 
        <>
          <ul>
            {
            Object.entries(RouteMap).map(([name, route]) => {
              return (userAuthStatus == route.requiredAuth || route.requiredAuth === AuthorizedStatus.IRRELEVANT) 
                && <Link className="link" key={name} to={route.path}>{name}</Link>
            })
            }
          </ul>
          { userAuthStatus === AuthorizedStatus.AUTHORIZED && 
            <button className="logoutbtn" onClick={() => logoutUser()}>Logout</button>
          }
        </>
        : 
        <>
          <Sidebar userAuthStatus={userAuthStatus} />
        </>
      }
      <Outlet />
    </div>
  )
};

export default Navbar;