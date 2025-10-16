import mongoose from "mongoose";

// create schema

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post Title is required"]
    },

     description: {
        type: String,
        required: [true, " Post Description  is required"]
    },

     category: {
        type: String,
        required: [true, "Post Category is required"]
    },

    numViews: [
        {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    ],

    likes:[
         {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    ],
    disLikes: [
        {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Please Author is required"
        ],
    },

    photo: {
        type: String,
        required: [true, "Post Image is required"],
    },
},

{
    timestamps: true,

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;