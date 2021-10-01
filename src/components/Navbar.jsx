import '../scss/navbar.scss';
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    let path = location.pathname.replace('/', '');
    return(
        <div className={"navbar"}>
          <p className="navbar-current-page"><span>Pages </span>/ {path} <br /> <b className="l-font">{path}</b></p>
          <div className="search-setting-profile">
            <div class="search-field">
              <input type="text" placeholder="Type here..." />
              <button className="search-btn"><ion-icon name="search-outline"></ion-icon></button>
            </div>
            <ul>
              <li><Link to="/profile"><ion-icon name="person-outline"></ion-icon> Profile</Link></li>
              <li><Link to="/"><ion-icon name="settings"></ion-icon></Link></li>
            </ul>
          </div>
        </div>
    )
}
export default Navbar;