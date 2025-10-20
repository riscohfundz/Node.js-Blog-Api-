
const bcrypt = require("bcryptjs");
const User = require("../../model/User/User");
const generateToken = require("../../utils/generateToken");

//Register
const userRegisterCtrl = async (req, res, next) => {
    const { firstname, lastname, profilephoto, email, password } = req.body;

    try {
        // check for email
        const userFound = await User.findOne({ email });
        if (userFound) {
            return next(new Error ("User Already Exist!"))
        }
        // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
     // create the user
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashPassword,
        })
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        next(new Error(error.message));

    }
};

//Login
const userLoginCtrl = async (req, res) => {
    const { email, password } = req.body;
    try {
    // check if email exist
    const userFound = await User.findOne({ email });
     if(!userFound) {
        return res.json({
            msg: "Invalid login credentials "
        })
    }
    //verify password
    const isPasswordMatched = await bcrypt.compare(
        password,
        userFound.password);
     if(!isPasswordMatched) {
        return res.json({
            msg: "Invalid login credentials "
        })
    }
        res.json({
            status: "success",
            data: {
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id), 
            }
        });
    } catch (error) {
        res.json(error.message);

    }
};

//All
const usersCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "All users route"
        });
    } catch (error) {
        res.json(error.message);

    }
};

//Profile
const userProfileCtrl = async (req, res) => {
    try {
       const user = await User.findById(req.userAuth);    
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.json(error.message);

    }
};

//Delete
const deleteUserCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete users   route"
        });
    } catch (error) {
        res.json(error.message);

    }
};

//Update
const updateUserCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update users   route"
        });
    } catch (error) {
        res.json(error.message);

    }
};

module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    usersCtrl,
    userProfileCtrl,
    deleteUserCtrl,
    updateUserCtrl
} 