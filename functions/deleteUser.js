const fs = require("fs");
const path = require("path");

function deleteUser(req, res) {
  const params = req.params;

  const allUsers = fs.readdirSync("users");
  const user = allUsers.find((u) => u === `${params.filename}.json`);

  fs.rmSync(path.resolve(__dirname, `../users/${user}`));

  res.end();
}

module.exports = deleteUser;
