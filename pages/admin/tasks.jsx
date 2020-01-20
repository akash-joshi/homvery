import { useLocalStorage } from "react-use";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "../../components/admin/Header";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [admin, setAdmin] = useLocalStorage("admin", false);
  const [user, setUser] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!admin || !login) location.href = "/admin/login";

    axios.get("/api/users").then(r => setUser(r.data[id]));
  });

  return (
    <section>
      <Header />
      <section
        style={{ width: "100vw", textAlign: "center" }}
        className="text-center vsc-initialized"
      >
        <form style={{ marginTop: "10vh" }} className="form-signin">
          <i width="72" height="72" className="mb-4 material-icons">
            home
          </i>
          <h1 className="mb-3">Tasks</h1>
          <h2>Phone Number : {user ? user.phone : "User doesn't exist"}</h2>
          <p className="mt-5 mb-3 text-muted">© 2019 - Homvery</p>
        </form>
      </section>
    </section>
  );
}
