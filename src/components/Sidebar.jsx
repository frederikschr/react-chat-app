import { useRef } from "react";
import '../styles/Sidebar.scss';
import { RouteMap, AuthorizedStatus } from "../constants/routes";
import { Link } from 'react-router-dom';
import logoutUser from "../firebase/auth/logoutUser";

const Sidebar = ({ userAuthStatus }) => {

  const sideBarRef = useRef();

  const openSideBar = () => {
    sideBarRef.current.style.width = "100%";
  }

  const closeSidebar = () => {
    sideBarRef.current.style.width = "0";
  }

  return (
    <div className="sidebar-wrapper">

      <button className="openbtn" onClick={openSideBar}>☰</button>   

      <div ref={sideBarRef} className="sidebar">
        <a className="closebtn" onClick={closeSidebar}>×</a>
        {
          Object.entries(RouteMap).map(([name, route]) => {
            return (userAuthStatus == route.requiredAuth || route.requiredAuth === AuthorizedStatus.IRRELEVANT) 
            && <Link className="link" key={name} onClick={closeSidebar} to={route.path}>{name}</Link>
          })
        }
         { userAuthStatus === AuthorizedStatus.AUTHORIZED && 
          <a onClick={() => { logoutUser(); closeSidebar()}}>Logout</a>
         }
      </div>
    </div>

  )

}

export default Sidebar;