import axios from "axios";

import "../signin.css";
import { useEffect, useState } from "react";

import Header from "../../components/admin/Header";

export default function Index() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    axios.get("/api/users").then(r => {
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
          <h1 className="h3 mb-3 font-weight-normal">Users</h1>
          {users
            ? users.map((user, index) => (
                <div key={index}>
                  <a href={`/admin/tasks?id=${index}`}>{user.phone}</a>
                </div>
              ))
            : "Loading ..."}
          <p className="mt-5 mb-3 text-muted">© 2019 - Homvery</p>
        </form>
      </section>
    </section>
  );
}
