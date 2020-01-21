import { useLocalStorage } from "react-use";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import Header from "../components/user/Header";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [user, setUsers] = useState("");
  const [admin, setAdmin] = useLocalStorage("admin", false);
  const [username, setUsername] = useLocalStorage("username", "");

  useEffect(() => {
    if (!login || admin) location.href = "/login";

    axios.get(`/api/user?phone=${username}`).then(r => {
      setUsers(r.data.result);
    });
  }, []);

  return (
    <section>
      <Header />
      <section
        style={{ width: "100vw", textAlign: "center" }}
        className="text-center vsc-initialized"
      >
        <div style={{ marginTop: "5em", padding: "1em" }}>
          <i width="72" height="72" className="mb-4 material-icons">
            home
          </i>
          <h1 className="h3 mb-3 font-weight-normal">Hello {username} !</h1>
          {user.tasks ? (
            <>
              Your tasks are :
              {user.tasks.map((task, index) => (
                <div
                  style={{ marginTop: "1em" }}
                  key={index}
                  className="ml-auto mr-auto card container"
                >
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <b>Task Name</b>
                    <br />
                    {task.taskName}
                    <br />
                    <b>Address</b>
                    <br />
                    {task.address}
                    <br />
                    <b>Task Assigned At</b>
                    <br />
                    {moment(task.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                </div>
              ))}
            </>
          ) : (
            "You have no tasks assigned !"
          )}
          <p className="mt-5 mb-3 text-muted">© 2019 - Homvery</p>
        </div>
      </section>
    </section>
  );
}
