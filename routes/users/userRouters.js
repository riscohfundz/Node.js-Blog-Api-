const express = require('express');
const { userRegisterCtrl, usersCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl, userLoginCtrl, profilephotoCtrl } = require('../../controllers/users/userCtrl');
const isLogin = require('../../middlewares/isLogin');
const storage = require('../../config/cloudinary');
const multer = require('multer');
const userRouter = express.Router();

// intsance of multer 
const upload = multer({storage});

//POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login", userLoginCtrl);

//GET/api/v1/users/
userRouter.get("/", usersCtrl);

//GET/api/v1/users/:id
userRouter.get("/profile/", isLogin, userProfileCtrl);

//DELETE/api/v1/users/:id
userRouter.delete("/:id", deleteUserCtrl);

//PUT/api/v1/users/:id
userRouter.put("/:id", updateUserCtrl);

//POST/api/v1/profile/photo/upload
userRouter.post("/profile-photo-upload", upload.single('profile'), profilephotoCtrl);


module.exports = userRouter;

