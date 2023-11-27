const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventReviewSchema = Schema(
  {
    User: {
      type: Schema.Types.ObjectId ,
      ref : "User" ,
    },
    Subject: {
      type: Schema.Types.ObjectId ,
      ref : "Event" ,
    },
    Content : {
      type : String , 
      default : ""
    }
    ,
    Rating : {
      type : Number ,
    }
    ,
    Date : {
      type : Date ,
      default : Date.now()
    }
    ,
    Helpful: {
      type : Number ,
      default: 0
    }
    ,
    Reply: [{
      Content: String,
      User: { type: Schema.Types.ObjectId, ref: "User" },
      Date: { type: Date, default: Date.now() }
    }],
    Images : {
      type: [String] ,
      default: []
    },
    // About:{
    //   type: Map, // Use Map to store job attributes as keys and values
    //   of: Number, // Values will be numbers
    //   default: new Map([
    //     ["Rating", 0.0],
    //     ["Number", 0]
    //   ]), // Initialize with default values (0.0 for Rating and Number)
    // },
    //,
    About: {
      type : [String] ,

    },
    ComeBack: {
      type : String ,
    }



  },
  { timestamps: true }
);

module.exports = mongoose.model("EventReview", EventReviewSchema);
