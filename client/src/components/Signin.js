import React from "react";
import { Link } from "react-router-dom";
import "../styles/signin.css";
function Signin() {
  return (
    <div className="my-card">
      <div className="card signin-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className=" btn waves-effect waves-light #42a5f5 blue lighten-1">
          signin
        </button>
        <p>
          <Link to="/signup">Don't had an account pinch me!</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
