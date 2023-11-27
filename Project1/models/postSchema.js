const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = Schema(
  {
    Title : {
      type : String , 
      default : ""
    }
    ,
    Description : {
      type : String , 
      default : ""
    }
    ,
    Category : {
      type : String , 
      default : ""
    }
    ,
    Images : {
      type : String , 
      default : ""
    }
    ,
    UserId : {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "User",
      default : ""
    }
    ,
    Likes: {
      type : [mongoose.Schema.Types.ObjectId] ,
      ref : "User",
      default : []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
