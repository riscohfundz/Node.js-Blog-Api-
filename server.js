const express = require ("express");
const dotenv = require ('dotenv');
const userRoutes = require("./routes/users/userRouters.js");
const postRouter = require("./routes/posts/postRouter.js");
const commentRouter = require("./routes/comments/commentRouter.js");
const categoryRouter = require("./routes/categories/categoryRouter.js");
const globalErrHandler = require("./middlewares/globalErrHandler.js");

dotenv.config();
require ("./config/dbConnect.js");
const app = express();

//middleware
app.use(express.json())// pass incoming payload

//routes

//users route
app.use("/api/v1/users/", userRoutes);

//posts route
app.use("/api/v1/posts", postRouter);

//comments route
app.use("/api/v1/comments", commentRouter);

//categories route
app.use("/api/v1/categories", categoryRouter);


//Error handles middleware
app.use(globalErrHandler);

// 404 Not found handler 
app.use('*', (req, res) => {
    console.log(req.originalUrl);
    
    res.status(404).json({
        message: `${req.originalUrl} - Route Not Found! `
    })
});

//listen to server

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>{
    console.log(`Server is up running on ${PORT}`);
    
})