import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper white">
          <Link to="/" class="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/createpost">Create post</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
