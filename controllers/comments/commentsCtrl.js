//create comments
const createCommentCtrl =  async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comment created"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//single comment
const singelCommentCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comment route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//delete comments
const deleteCommentCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "delete comments route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//update comments
const updateCommentCtrl =  async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "update comments route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};


module.exports = {
    createCommentCtrl,
    singelCommentCtrl,
    deleteCommentCtrl,
    updateCommentCtrl,
}