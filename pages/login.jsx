import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";
import axios from "axios";

import "./signin.css";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [username, setUsername] = useLocalStorage("username", "");
  const [admin, setAdmin] = useLocalStorage("admin", false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (login && !admin) location.href = "/";
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (phone.length !== 10)
      return swal("Phone Number should be 10 digits", "", "error");

    axios
      .post("/api/user/login", { phone, password })
      .then(r => {
        setTimeout(() => {
          location.href = "/";
          setLogin(true);
        }, 2000);
        setUsername(phone);
        setAdmin(false);
        swal("Logged In !", "", "success");
      })
      .catch(() => swal("Wrong Username or Password !", "", "error"));
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
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <br />
          <a href="/signup">I don't have an account</a>
          <p className="mt-5 mb-3 text-muted">© 2019 - Homevery</p>
        </form>
      </section>
    </section>
  );
}
