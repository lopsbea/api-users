const express = require("express");
const bodyParser = require("body-parser");
const getAllUsers = require("./functions/getUsers");
const createUser = require("./functions/createUser");
const updateUser = require("./functions/updateUser");
const deleteUser = require("./functions/deleteUser");

const app = express();

app.use(bodyParser.json());

app.get("/users", getAllUsers);
app.post("/users", createUser);
app.put("/users/:filename", updateUser);
app.delete("/users/:filename", deleteUser);

app.listen(3333, () => {
  console.log("Server running");
});
