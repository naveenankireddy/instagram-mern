import React, { useContext, useState } from "react";
import "../styles/signin.css";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { userContext } from "../App";

function Signin() {
  const { state, disatch } = useContext(userContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
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
    fetch("/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "hey im data");

        if (data.error) {
          console.log(data, "hey im data");
          M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          disatch({ type: "USER", payload: data.user });
          M.toast({
            html: "Succesfully Signed In",
            classes: "#ba68c8 purple lighten-2",
          });
          history.push("/");
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
          Signin
        </button>
        <p>
          <Link to="/signup">Don't had an account pinch me!</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
