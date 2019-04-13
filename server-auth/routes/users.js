var express = require("express");
var router = express.Router();
var cors = require("cors");
var jwt = require("../services/utils.js");

router.all("http://localhost:3000", cors());

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
  return res.send({ok: 'ok'})
});

router.post("/login", async (req, res, next) => {
  console.log(req.body);
  let token = await jwt.token(req.body.email);

  console.log(token)
  return res.send({token: token})
});

module.exports = router;
