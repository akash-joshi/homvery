const express = require("express");
const next = require("next");
const cors = require("cors");
const bodyparser = require("body-parser");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

db.defaults({ users: [] }).write();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(bodyparser.json());

  server.get("/sitemap.xml", (req, res) =>
    res.sendFile(`${__dirname}/sitemap.xml`)
  );
  server.get("/robots.txt", (req, res) =>
    res.sendFile(`${__dirname}/robots.txt`)
  );

  // API to check if api server running
  server.get("/api/health", (req, res) => {
    res.send("working");
  });

  server.get("/api/users", (req, res) => res.send(db.get("users").value()));

  server.put("/api/user", (req, res) => {
    const { phone, password } = req.body;

    const user = db
      .get("users")
      .filter({ phone })
      .value();

    if (user.length !== 0) {
      console.log("returnin here");
      return res
        .status(400)
        .send({ msg: "User already exists" })
        .status(400);
    }

    db.get("users")
      .push({ phone, password })
      .write();

    res.sendStatus(200);
  });

  server.post("/api/user/login", (req, res) => {
    const { phone, password } = req.body;

    const user = db
      .get("users")
      .filter({ phone })
      .value();

    if ( user[0].password === password ) res.sendStatus(200);
    else res.sendStatus(403);
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
