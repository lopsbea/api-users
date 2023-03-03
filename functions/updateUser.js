const fs = require('fs')

function updateUser(req, res) {
  const params = req.params;
  const body = req.body;

  res.send(body);
}

module.exports = updateUser;
