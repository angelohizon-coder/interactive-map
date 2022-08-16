const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("map");
});


app.listen(port, function() {
  console.log("Server is running on " + port);
});
