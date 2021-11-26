const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database
const db = require("./app/models");

//Call SYNC method
db.sequelize.sync();

//Simple route for test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to groupomania application." });
});

//Routes
require("./app/routes/comment.js")(app);
require("./app/routes/auth.js")(app);
require("./app/routes/user.js")(app);

//listening Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//Initialize roles
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}
