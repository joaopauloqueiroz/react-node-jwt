var express = require("express");
var router = express.Router();
var cors = require("cors");
var jwt = require("../services/utils.js");
var i  = 'Mysoft corp';          // Issuer 
var s  = 'some@user.com';        // Subject 
var a  = 'http://mysoftcorp.in'; // Audience

var signOptions = {
      issuer:  i,
      subject:  s,
      audience: a,
      expiresIn:  120,    // 30 days validity
      algorithm:  "RS256"    
  };

router.all("http://localhost:3000", cors());

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
  return res.send({ok: 'ok'})
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  let token = jwt.sign({data1: req.body.password}, signOptions);
  console.log(token)
  return res.send({token: token})
});

module.exports = router;
