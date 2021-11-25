const { authjwt } = require("../middleware");
const controller = require("../controllers/user.js");


///// Testing Authorization With GET

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // For ALL
    app.get(
        "/api/test/all", 
        controller.allAccess
    );

    // For LOGGEDIN USER (user/admin)
    app.get(
        "/api/test/user",
        [authjwt.verifyToken],
        controller.userBoard
    );
    
    //For ADMIN
    app.get(
        "/api/test/admin",
        [authjwt.verifyToken, authjwt.isAdmin],
        controller.adminBoard
    );
};
