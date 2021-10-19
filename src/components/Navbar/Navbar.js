import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="rightSection">
        <h2>Rick and morty API</h2>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/episodes" activeClassName="active">
              Episodes
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations" activeClassName="active">
              Locations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
