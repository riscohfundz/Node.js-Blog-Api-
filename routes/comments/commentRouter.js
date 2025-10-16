const express = require("express");
const { createCommentCtrl, singelCommentCtrl, updateCommentCtrl, deleteCommentCtrl } = require("../../controllers/comments/commentsCtrl");
const commentRouter = express.Router();

//POST/api/v1/comments
commentRouter.post("/", createCommentCtrl);


//GET/api/v1/comments/:id
commentRouter.get("/:id", singelCommentCtrl);

//DELETE/api/v1/comments/:id
commentRouter.delete("/:id", deleteCommentCtrl);

//PUT/api/v1/comments/:id
commentRouter.put("/:id", updateCommentCtrl);




module.exports = commentRouter;