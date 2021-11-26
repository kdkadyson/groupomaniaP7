const Comment = require("../models/Comment.js");

// Validate/Create/Save new comment
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Le contenu ne peut être vide!"
        });
    }
    const comment = new Comment({
        category: req.body.category,
        title: req.body.title,
        img: req.body.img,
        description: req.body.description,   
    });
    Comment.create(comment, (err, data) =>{
        if(err)
            res.status(500).send({
                message: 
                err.message || "Une erreur est survenue lors de la création de votre post."
            })
        else res.send(data);
    });   
};

//Retrieve all comments with condition
exports.findAll = (req, res) => {
    const title = req.query.title;
    Comment.getAll(title, (err, data) =>{
        if(err)
            res.status(500).send({
                message:
                err.message || " Une erreur est survenue lors de l'acces aux commentaires postés."
            });
        else res.send(data);    
    })
};

//Find one comment with id
exports.findOne = (req, res) => {
    Comment.findById(req.params.id, (err, data) => {
        if(err){ 
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Commentaire selectionné non trouvé avec l'id ${req.params.id}.`
                });
            }else{
                res.status(500).send({
                    message: "Une erreur est survenue lors de l'accés au post de l'id " + req.params.id
                });
            }
        }else res.send(data);
    });
};

exports.delete = (req, res) =>{
    Comment.remove(req.params.id, (err, data) =>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Commentaire non trouvé avec id ${req.params.id}.`
                });
            }else{
                res.status(500).send({
                    message: "Une erreur est survenue lors de la suppression du post avec l'id " + req.params.id
                });
            }
        }else res.send({ message: `Votre commentaire vient d'être supprimé!` });
    }); 
};


exports.like = (req,res) =>{
    
};

exports.reply = (req,res) =>{
    
};