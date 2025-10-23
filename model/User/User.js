// import mongoose from "mongoose";
const mongoose  = require ("mongoose")

// create schema

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First Name is required']
    },
    
      lastname: {
        type: String,
        required: [true, 'Last Name is required']
    },
    
    profilephoto: {
        type: String,
    }, 

    email: {
        type: String,
        required: [true, 'Email Name is required']
    }, 

     password: {
        type: String,
        required: [true, 'Password is required']
    },
  
    isBlocked: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        enum: ['Admin', 'Guest', 'Editor']
    },

    viewers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

     following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    posts: [{
        type: mongoose.Schema.ObjectId,
        ref: "Post"
    },
  ],

  blocked: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],

  plan: [{
    type: String,
    enum: ['Free', 'Premium', "pro"],
    default: 'Free'
  }],

  userAward: {
    type: String,
    enum: ['Bronze', 'Silver', "Gold"],
    default: 'Bronze'
  },
}, 

{
    timestamps: true,

});

// Compile the user model
const User = mongoose.model('User', userSchema);

module.exports = User; 