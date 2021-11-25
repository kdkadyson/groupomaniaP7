////////// Authentication / Authorization //////////

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

///////Middleware F.

//To check if token is provided (token from x-access-token of HTTP headers)
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "Désolé, aucun token fourni!"
    });
  }
  // Then use jwt's verify() function
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Non autorisé!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};  
// To check if roles (user) contains required role or not
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++){
        if (roles[i].name === "admin"){
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Désolé, Admin Role requis!"
      });
      return;
    })
  })
};

const authjwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = authjwt