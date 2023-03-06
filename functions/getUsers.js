const fs = require("fs");
const path = require("path");

function getAllUsers(_req, res) {
  const allUsers = fs.readdirSync("users");
  const user = allUsers.map((user) =>
    JSON.parse(
      fs.readFileSync(path.resolve(__dirname, `../users/${user}`), {
        encoding: "utf8",
      })
    )
  );
  user.sort((a, b) => {
    if (a.filename > b.filename) return -1;
    else if (a.filename < b.filename) return 1;
    else return 0;
  });
  res.send(user);
}

module.exports = getAllUsers;
