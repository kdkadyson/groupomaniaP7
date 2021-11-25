module.exports = app => {
    const comments = require("../controllers/comment.js");
    var router = require("express").Router();

    router.post("/", comments.create);
    router.get("/", comments.findAll);
    router.get("/:id", comments.findOne);
    router.delete("/:id", comments.delete);

    app.use("/api/comments", router);
}