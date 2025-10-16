//create category
const createCategoryCtrl =  async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "category created"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//single category
const singleCatergoryCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "category route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//delete category
const deleteCategoryCtrl =  async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "delete category route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
};

//update category
const updateCategoryCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success",
            data: "update category route"
        });
    } catch (error) {
        res.json(error.message);
        
    }
}



module.exports = {
    createCategoryCtrl,
    singleCatergoryCtrl,
    deleteCategoryCtrl,
    updateCategoryCtrl,
}