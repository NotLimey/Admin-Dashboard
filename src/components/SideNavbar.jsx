import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SideNavbar = ({activeNavItem}) => {
    var items = ["Dashboard", "Profile", "Users", "Settings"]
    items.forEach(p => {
        var e = document.getElementById(p);
        if(e !== null) {
            e.classList.remove('active');
        }
    });
    useEffect(() => {
        var elem = document.getElementById(activeNavItem);
        if(elem !== null) {
          elem.classList.add('active');
        }
      }, [activeNavItem])
    
    return(
        <div className="sidebar">
          <div className="nav-bar-brand">
            <h4>Limeyfy<br /> Dashboard</h4>
          </div>
          <ul className="nav-items">
            <li id='Dashboard' className="side-nav-item"><Link to="/Dashboard"><ion-icon name="home-outline"></ion-icon> Dashboard</Link></li>
            <li id='Users' className="side-nav-item"><Link to="/Users"><ion-icon name="people-outline"></ion-icon> Users</Link></li>
          </ul>
          <p className="nav-divider">Account pages</p>
          <ul className="nav-items">
            <li id='Profile' className="side-nav-item"><Link to="/Profile"><ion-icon name="person-outline"></ion-icon> Profile</Link></li>
            <li id='Settings' className="side-nav-item"><Link to="/Settings"><ion-icon name="settings-outline"></ion-icon> Settings</Link></li>
            <li className="side-nav-item"><Link to="/"><ion-icon name="log-out-outline"></ion-icon> Logout</Link></li>
          </ul>
        </div>
    )
}

export default SideNavbar;