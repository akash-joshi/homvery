import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";
import axios from "axios";

import "./signin.css";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [username, setUsername] = useLocalStorage("username", "");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (phone.length !== 10) return swal("Phone Number should be 10 digits", "", "error");

    axios
      .put("/api/user", { phone, password })
      .then(r => {
        setTimeout(() => {
          location.href = "/";
          setLogin(true);
        }, 2000);
        setUsername(phone);
        swal("Signed Up !", "", "success");
      })
      .catch(() => swal("User already exists !", "", "error"));
  };

  return (
    <section>
      <section
        style={{ width: "100vw", textAlign: "center" }}
        className="text-center vsc-initialized"
      >
        <form onSubmit={handleSubmit} className="form-signin">
          <i width="72" height="72" className="mb-4 material-icons">
            home
          </i>
          <h1 className="h3 mb-3 font-weight-normal">Create New Account</h1>
          <input
            type="number"
            id="inputEmail"
            className="form-control"
            placeholder="Phone Number"
            required
            autoFocus
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
          <br />
          <a href="/login">I have an account !</a>
          <p className="mt-5 mb-3 text-muted">© 2019 - Homevery</p>
        </form>
      </section>
    </section>
  );
}
