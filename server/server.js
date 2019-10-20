const express = require("express");
var cors = require('cors')

const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
