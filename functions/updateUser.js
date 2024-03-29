const fs = require("fs");
const path = require("path");

function updateUser(req, res) {
  const params = req.params;
  const body = req.body;

  const allUsers = fs.readdirSync("users");
  const user = allUsers.find((u) => u === `${params.filename}.json`);

  fs.writeFileSync(
    path.resolve(__dirname, `../users/${user}`),
    JSON.stringify(body)
  );

  res.send(body);
}

module.exports = updateUser;
