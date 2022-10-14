import { useRef } from "react";
import useWindowSize from "../custom_hooks/useWindowSize";
import '../styles/Sidebar.scss';
import { RouteMap, AuthorizedStatus } from "../constants/routes";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserAuthContext } from "../firebase/app";

const Sidebar = () => {

  const userAuthState = useContext(UserAuthContext) !== null ? AuthorizedStatus.AUTHORIZED : AuthorizedStatus.UNAUTHORIZED;

  const windowSize = useWindowSize();
  
  const sideBarRef = useRef();

  const openSideBar = () => {
    sideBarRef.current.style.width = "100%";
  }

  const closeSidebar = () => {
    sideBarRef.current.style.width = "0";
  }

  return (
    <div className="sidebar-wrapper">

      { windowSize.width < 700 && 
        <> 
          <div ref={sideBarRef} className="sidebar">
            <a className="closebtn" onClick={closeSidebar}>×</a>
            {
              Object.entries(RouteMap).map(([name, route]) => {
                return (userAuthState == route.requiredAuth || route.requiredAuth === AuthorizedStatus.IRRELEVANT) 
                && <Link key={name} onClick={closeSidebar} to={route.path}>{name}</Link>
              })
              
            }
          </div>
            
          <button className="openbtn" onClick={openSideBar}>☰</button>  
        </>
      }
    </div>

  )

}

export default Sidebar;