const req = require("express/lib/request");

let usersMethod = {
  registro: (req, res) => {
    let { email, pass, validpass } = req.body;
  },
};
