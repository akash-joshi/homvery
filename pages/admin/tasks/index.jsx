import { useLocalStorage } from "react-use";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

import Header from "../../../components/admin/Header";

export default function Index() {
  const [login, setLogin] = useLocalStorage("login", false);
  const [admin, setAdmin] = useLocalStorage("admin", false);
  const [user, setUser] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!admin || !login) location.href = "/admin/login";

    axios.get("/api/users").then(r => setUser(r.data[id]));
  });

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/api/user/task", { phone: user.phone, taskName, address })
      .then(r => {
        setTimeout(() => {
          location.reload();
        }, 2000);
        swal("Task Added !", "", "success");
      });
  };

  return (
    <section>
      <Header />
      <section
        style={{ width: "100vw", textAlign: "center", padding: "1em" }}
        className="text-center vsc-initialized"
      >
        <div style={{ marginTop: "10vh" }} className="form-signin">
          <i width="72" height="72" className="mb-4 material-icons">
            home
          </i>
          <h1 className="mb-3">Tasks</h1>
          {user ? (
            <>
              <h3>Phone Number : {user.phone}</h3>
              <br />
              {user.tasks ? (
                user.tasks.map((task, index) => (
                  <div style={{marginTop: "1em"}} key={index} className="ml-auto mr-auto card container">
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
                ))
              ) : (
                <h4 style={{ color: "red" }}>User has no tasks</h4>
              )}
              <br />
              <a href="#" onClick={() => setAddTask(true)}>
                Add a task
              </a>
            </>
          ) : (
            "User doesn't exist"
          )}

          <br />
          <br />

          {addTask && (
            <div className="ml-auto mr-auto card container">
              <form
                onSubmit={handleSubmit}
                className="card-body"
                style={{ textAlign: "left" }}
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Task Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={e => setTaskName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Address</label>
                  <textarea
                    onChange={e => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          )}

          <p className="mt-5 mb-3 text-muted">© 2019 - Homvery</p>
        </div>
      </section>
    </section>
  );
}
