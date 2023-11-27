const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pricing = new Schema({
  price: Number,
  currency: String ,
  header: String,
  description: String,
});
const questions_answers = new Schema({
  question : String ,
  answer : String ,
});

const boothPricing = new Schema({
  price: Number,
  currency: String ,
  header: String,
  description: String,
});


const EventSchema = Schema(
  {
    Name: {
      type: String,
    },
    Country: {
      type: String,
    },
    City: {
      type: String,
    },
    Content: String,
    Speakers: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: []
    },
    Documents: {
      type: [String],
      default: [],
    },
    Images: {
      type: [String],
      default: [],
    },
    Highlights: String,
    PricingOfTickets: [pricing],
    Exhibitors: {
      type: [Schema.Types.ObjectId],
      ref: "Company",
      default: []// Set the default value to an empty array
    },
    BoothId:{
      type: [String],
    },
    Products:{
      type: [String],
    },
    Interested: {
      type: Number,
      default: 0
    },
    Attending: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    Organizer: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    Topics: [String],
    Category: [String],
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
    Online: {
      type: Boolean,
    },
    Banner: String,
    ZipCode: {
      type: String,
    },
    Email: {
      type: String,
    },
    VideoUrl: {
      type: String,
    },
    StartDate: {
      type: Date,
    },
    EndDate: {
      type: Date,
    },
    TextDate: {
      type: String,
    },
    Format: {
      type: String,
      enum: ["Trade Shows", "Conferences", "Workshops" , "Virtual Events"],
    },
    EntryFee: {
      type: String,
      enum: ["Free", "Paid", "Free & Paid"],
    },
    Venue: {
      type: Schema.Types.ObjectId,
      ref: "Venue",
    },
    Members: {
      type: String,
    },
    Frequency: {
      type: String,
    },
    Featured: {
      type: Boolean,
      default: false,
    },
    Followers: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    FollowersNumber: {
      type : Number ,
      default: 0
    }
    ,
    Editions: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
    },
    EditionsDate: {
      type: [Date],
    },
    jobCounts: {
      type: Map, // Use Map to store job titles as keys and counts as values
      of: Number, // Values will be numbers representing the count
      default: new Map(), // Initialize with an empty Map
    },
    BoothRequests: [
      {
        User: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        RequestContent: {
          type: [String],
          default: [],
        },
      },
    ],
    FrequentlyAskedQuestions: {
    type : [questions_answers] ,
    default: []
  },
  Summary: {
    type :String , 

  },
  Address: {
    type : String ,
    
  },
  BoothPrices:[boothPricing],
  Status: {
    type : String ,
  },
  HeaderAbout : {
    type : String ,
  },
  Background : {
    type : String ,
  },
  WebsiteUrl: {
    type : String ,
  },
  ExhibitorsProfile: {
    type : String , 

  },
  EstimatedVisitors: {
    type : String ,

  },
  WhyToAttend: {
    type : [String] ,

  },
  Going: {
    type: Number,
    default: 0
  },
  Delegates : {
    type : String ,
  },
  ExhibitorsNumber:{
    type : String ,
    
  } 
  
  },


  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
