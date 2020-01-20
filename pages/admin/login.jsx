import { useLocalStorage } from "react-use";
import React, { useState } from "react";

import "../signin.css";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [admin, setAdmin] = useLocalStorage("admin", false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log('here')
    const eusername = "prahllad@homvery.com";
    const epassword = "prahllad0001";

    if (eusername === username && epassword === password) {
      setAdmin(true);
      setLogin(true);
      location.href = "/admin";
    }
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
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            onChange={e => setUsername(e.target.value)}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2019 - Homevery</p>
        </form>
      </section>
    </section>
  );
}
