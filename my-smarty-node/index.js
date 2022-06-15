const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello form my personality smarty pant!! auto restart");
});

const users = [
  { id: 0, name: "suny", email: "suny@gmail.com", phone: "019333344" },
  { id: 1, name: "shabena", email: "shabena@gmail.com", phone: "019333344" },
  { id: 2, name: "sabonti", email: "sabonti@gmail.com", phone: "019333344" },
  { id: 3, name: "sumita", email: "sumita@gmail.com", phone: "019333344" },
  { id: 4, name: "shakila", email: "shakila@gmail.com", phone: "019333344" },
  { id: 5, name: "sosmita", email: "sosmita@gmail.com", phone: "019333344" },
  { id: 6, name: "supiya", email: "supiya@gmail.com", phone: "019333344" },
];

app.get("/users", (req, res) => {
  // console.log("query", req.query);
  // if (req.query.name) {
  //   const search = req.query.name;
  //   const match = users.filter(user =>
  //     user.name.toLocaleLowerCase().includes(search)
  //   );
  //   res.send(match)
  // }
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter(user =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  }
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("requires body", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fuzil", (req, res) => {
  res.send(["mango", "orange", "banner"]);
});

app.listen(port, () => {
  console.log("listing the port is running", port);
});
