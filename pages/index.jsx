import { useLocalStorage } from "react-use";
import axios from "axios";

import "./signin.css";
import { useEffect, useState } from "react";

import Header from "../components/user/Header";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [users, setUsers] = useState("");
  const [admin, setAdmin] = useLocalStorage("admin", false);


  useEffect(() => {
    if (!login || admin) location.href = "/login";

    axios.get("/api/users").then(r => {
      console.log(r.data)
      setUsers(r.data);
    });
  }, []);

  return (
    <section>
      <Header />
      <section
        style={{ width: "100vw", textAlign: "center" }}
        className="text-center vsc-initialized"
      >
        <form className="form-signin">
          <i width="72" height="72" className="mb-4 material-icons">
            home
          </i>
          <h1 className="h3 mb-3 font-weight-normal">Hello User !</h1>
          <p className="mt-5 mb-3 text-muted">© 2019 - Homvery</p>
        </form>
      </section>
    </section>
  );
}
