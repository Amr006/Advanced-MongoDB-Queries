const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueReviewSchema = Schema(
  {
    User: {
      type: Schema.Types.ObjectId ,
      ref : "User" ,
    },
    Subject: {
      type: Schema.Types.ObjectId ,
      ref : "Venue" ,
    },
    Content : {
      type : String , 
      default : ""
    }
    ,
    Rating : {
      type : Number ,
      default : 0 
    }
    ,
    Date : {
      type : Date ,
      default : Date.now()
    },
    Helpful: {
      type : Number ,
      default: 0
    }
    ,
    Reply: {
      type : [String],
      default: []
    }




  },
  { timestamps: true }
);

module.exports = mongoose.model("VenueReview", venueReviewSchema);
