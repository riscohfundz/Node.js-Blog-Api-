
//create posts
const createPostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "post created"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//single post
const singlePostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "post route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//all posts
 const postCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "posts route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//delete post
const deletePostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "delete posts route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//update post
const updatePostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "update post  route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
}

module.exports = {
    createPostCtrl,
    singlePostCtrl,
    postCtrl,
    deletePostCtrl,
    updatePostCtrl,
}