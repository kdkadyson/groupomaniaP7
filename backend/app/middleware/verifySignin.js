const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

///////Middleware F.

//To check if username or email is duplicate or not
checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Désolé, Username déja utilisé!"
            });
        return;
        }
        
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
            message: "Désolé, email non valide!"
            });
            return;
        }

      next();
    });
    });
};

//To check if roles in the request is existed or not
checkRolesExisted = (req, res, next) =>{
    if (req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Désolé, ce role n'existe pas = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next(); 
};

const verifySignin = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

  
module.exports = verifySignin;
