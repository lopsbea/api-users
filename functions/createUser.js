const fs = require("fs");
const path = require("path");

function createUser(req, res) {
  const body = req.body;

  fs.appendFile(
    path.resolve(__dirname, `../users/${body.filename}.json`),
    JSON.stringify(body),
    () => res.send(body)
  );
}

module.exports = createUser;
