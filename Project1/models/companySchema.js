const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = Schema(
  {
    Name : {
      type : String , 
    }
    ,
    Banner: {
      type: String , 

    },
    Website : {
      type : String ,
      default : ""
    }
    ,
    Description : {
      type : String , 
      default : ""
    }
    ,
    Additional : {
      type : mongoose.Schema.Types.Mixed ,
      default : ""
    }
    ,
    Rating: {
      "1": {
        type: Number,
        default: 0,
      },
      "2": {
        type: Number,
        default: 0,
      },
      "3": {
        type: Number,
        default: 0,
      },
      "4": {
        type: Number,
        default: 0,
      },
      "5": {
        type: Number,
        default: 0,
      },
      Average: {
        type: Number,
        default: 0.0, // Default to a float value
      }
  },
    Employees: {
      type : [mongoose.Schema.Types.ObjectId] ,
      ref : "User",
      default : []
    }
    ,
    Followers: {
      type : [mongoose.Schema.Types.ObjectId],
      ref : "User",
      default : []
    },
    FollowersNumber: {
      type : Number ,
      default: 0
    }
    ,
    FlagedEvents: {
      type : [mongoose.Schema.Types.ObjectId],
      ref : "Event",
      default : []
    },
    UpcomingEvent: {
      type : [mongoose.Schema.Types.ObjectId],
      ref : "Event",
      default : []
    }
    ,
    Country:{
      type: String ,
    }
    ,
    City: {
      type : String ,
    },
    Featured: {
      type : Boolean ,
      default : false,
    },
    NumberOfEvents : {
      type : Number , 
      default : 0 
    },
    Category: {
      type : [String],
      
    },
    Representatives:{
      type : Number ,
      default : 0
    },
    Exhibited: {
      type : Number ,
      default : 0 ,
    },
    SocialLinks:{
      type: Map, // Use Map to store job titles as keys and counts as values
      of: String, // Values will be numbers representing the count
      default: new Map(), // Initialize with an empty Map
    },
    Email : {
      type : String ,
    },
    InterestedGeographies : {
      type : String 
    }


  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
