const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  // Add other contact fields as needed
});

const VenueSchema = Schema(
  {
    Banner: {
      type: String , 

    },
    Images: {
      type: [String] ,
    },
    Name: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
    },
    City: {
      type: String,
    },
    Latitude:{
      type : String,
    },
    Longitude:{
      type: String ,
    },
    UpcomingEvent: {
      type: [Schema.Types.ObjectId],
      ref : "Event"
    },
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
    Contacts: ContactSchema,
    Followers: {
      type:[Schema.Types.ObjectId],
      ref : "User",
      
    },
    FollowersNumber: {
      type : Number ,
      default: 0
    },
    Meeting_space: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    FlagedEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
    },
    OverviewImages: {
      type : [String],
      default: []
    },
    Format: {
      type : String ,
      enum: ["Trade Shows" , "Conferences" , "Workshops" , "Virtual Events"]
    },
    TotalArea:{
      type : String,
    },
    BuiltYear:{
      type : Number ,
    }
    ,
    NumberOfEvents : {
      type : Number ,
      default : 0 ,
    },
    Featured: {
      type : Boolean ,
      default : false 
    },
    Category:{
      type : [String] ,
    },
    WebsiteUrl : {
      type : String ,
      default : "",
    },
    Description: {
      type : String ,
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Venue", VenueSchema);
