import React from "react";
import "../styles/signin.css";
import { Link, useHistory } from "react-router-dom";
// import { Formik } from "formik";
// import axios from "axios";
import { useState } from "react";
import M from "materialize-css";

function Signup(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      M.toast({
        html: "All fields are mandatory",
        classes: "#e57373 red lighten-2",
      });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      M.toast({
        html: "Invalid Email Address",
        classes: "#e57373 red lighten-2",
      });
      return;
    }
    fetch("/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
        } else {
          M.toast({ html: data.message, classes: "#ba68c8 purple lighten-2" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="my-card">
      <div className="card signin-card input-field">
        <h2>Instagram</h2>

        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          onClick={() => handleSubmit()}
          className=" btn waves-effect waves-light #42a5f5 blue lighten-1"
        >
          Signup
        </button>
        <p>
          <Link to="/signin">Already had an account pin me!</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
