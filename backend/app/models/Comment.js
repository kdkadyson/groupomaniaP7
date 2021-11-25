const sql = require("./db.js");

const Comment = function(comment){
    this.category = comment.category;
    this.name = comment.name;
    this.photo = comment.photo;
    this.title = comment.title;
    this.img = comment.img;
    this.description = comment.description;
    this.dateTime = comment.dateTime;  
};

Comment.create = (newComment, result) => {
    sql.query("INSERT INTO comments SET ?", newComment, (err, res) => {
        if(err){
            console.log("Erreur: ", err);
            result(err, null);
            return;
        }
        console.log("created comment: ", { id: res.insertId, ...newComment });
        result(null, { id: res.insertId, ...newComment });
    });
};

Comment.getAll = (name, result) => {
    let query = "SELECT * FROM comments";
    if(name){
        query =+ `WHERE name LIKE '%{name}%'`;
    }
    sql.query(query, (err, res) => {
        if(err){
            console.log("Erreur: ", err);
            result(null, err);
            return;  
        }
        console.log("comments: ", res);
        result(null, res);
    });
};

Comment.findById = (id, result) => {
    sql.query(`SELECT * FROM comments WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("Erreur: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found comment: ", res[0]);
            result(null, res[0]);
            return;
        }
        //Comment not found with id
        result({ kind: "not_found" }, null);
    });
  };

Comment.remove = (id, result) => {
    sql.query("DELETE FROM comments WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Erreur: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
        //Comment not found with id
        result({ kind: "not_found" }, null);
        return;
        }
        console.log("deleted comment with id: ", id);
        result(null, res);
    });
}; 


module.exports = Comment;