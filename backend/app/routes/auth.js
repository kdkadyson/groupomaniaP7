////////// USER AUTHENTIFICATION //////////

const { verifySignin } = require("../middleware");
const controller = require("../controllers/auth.js");

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    /* export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
} */ 

    //Authentication => POST SIGNIN
    app.post(
        "/api/auth/signin",
        [
          verifySignin.checkDuplicateUsernameOrEmail,
          verifySignin.checkRolesExisted
        ],
        controller.signin
    );

    //Authentication => POST LOGIN
    app.post("/api/auth/login", controller.login);
};