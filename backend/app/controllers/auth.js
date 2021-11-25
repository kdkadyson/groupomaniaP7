const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs")

//Create/Save new USER
exports.signin = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(user => {
            if (req.body.roles){
                Role.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles 
                        }
                    }
                }).then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "Utilisateur bien enregistré!" });
                    });
                });
            }else{//Set role 
                user.setRoles([1]).then(() => {
                    res.send({ message: "Utilisateur bien enregistré!" });
                });   
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

//Find username in database (if exists)
exports.login = (req, res) => {
    User.findOne({
        where: {
          username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "Désolé, utilisateur invalide!" });
            }
            //Compare PW with database PW (bcrypt)
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                  accessToken: null,
                  message: "Désolé, mot de passe invalide!"
                });
            }
            //Generate a token (jwt)
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 h
            })
            //Find USER role
            var authorities = [];
                user.getRoles().then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                    authorities.push("ROLE_" + roles[i].name.toUpperCase());
                    }
                    //Return user information & access Token
                    res.status(200).send({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        roles: authorities,
                        accessToken: token
                    });
                });
            })
            .catch(err => {
                res.status(500).send({ message: err.message });
            });
};

