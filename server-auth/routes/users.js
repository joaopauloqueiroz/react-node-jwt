var express = require("express");
var router = express.Router();
var cors = require("cors");

router.all("http://localhost:3000", cors());

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
