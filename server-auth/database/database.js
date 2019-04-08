const neo4j = require("neo4j-driver").v1;
require("dotenv-safe").load();

var url = "bolt://" + "http://localhost" + ":" + "" + "";
const driver = neo4j.driver(
  url,
  neo4j.auth.basic(process.env.LOGIN, process.env.PASSWD)
);
const session = driver.session();
module.exports = { driver, session };
