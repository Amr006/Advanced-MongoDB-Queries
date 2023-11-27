const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = Schema(
  {
    PostId: {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "Post",
      default : ""
    }
    ,
    Content : {
      type : String , 
      default : ""
    }
    ,
    UserId : {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "Post",
      default : ""
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("CommentInfo", CommentSchema);
