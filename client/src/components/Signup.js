import React from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="my-card">
      <div className="card signin-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className=" btn waves-effect waves-light #42a5f5 blue lighten-1">
          Signup
        </button>
        <p>
          <Link to="/signin">Already had an account pinch me!</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
