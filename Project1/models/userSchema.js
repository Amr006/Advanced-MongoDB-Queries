const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    Email: {
      type: String,
    },
    FirstName: {
      type: String,
      default: "",
    },
    LastName: {
      type: String,
      default: "",
    },
    Password: {
      type: String,
    },
    Verified: {
      type: Boolean,
      default: false,
    },
    PhoneNumber: {
      type: String,
    },
    Name: {
      type: String,
      default: "",
    },
    Role: {
      type: String,
      default: "User",
    },
    Image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1738/1738691.png",
    },
    About: {
      type: String,
      default: "",
    },
    Credentials: {
      type: String, //will be edited
    },
    Filters: {
      type: [Schema.Types.ObjectId],
      ref: "Filter",
      default: [],
    },
    AttendingEvents: {
      type: [String],
      default: "",
    },
    Organization: {
      type: String,
      default: "",
    },
    FollowingEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
      default: [],
    },
    FollowingVenues: {
      type: [Schema.Types.ObjectId],
      ref: "Venue",
      default: [],
    },
    FollowingCompany: {
      type: [Schema.Types.ObjectId],
      ref: "Company",
      default: [],
    },
    Connectors: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    PendingConnectors: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    ForwardConnectors: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    Following: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    Followers: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    Posts: {
      type: [Schema.Types.ObjectId],
      ref: "Post",
      default: [],
    },
    AddedEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
    },
    AddedVenues: {
      type: [Schema.Types.ObjectId],
      ref: "Venue",
    },
    Coupons: {
      type: [String],
      default: "",
    },
    Hubs: {
      type: [String],
      default: "",
    },
    LoggedInWith: {
      type: String,
      default: "Email",
    },
    FacebookId: {
      type: String,
      default: "",
    },
    Country: {
      type: String,
      default: "",
    },
    City: {
      type: String,
      default: "",
    },
    NumberOfEventsAdded: {
      type: Number,
    },
    NumberOfVenuesAdded: {
      type: Number,
    },
    NumberOfCompanysAdded: {
      type: Number,
    },
    Calender: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
      default: [],
    },
    Categories: {
      type: [String],
      default: [],
    },
    TopicsAndProducts: {
      type: [String],
      default: [],
    },
    Opportunities: {
      type: [String],
      default: [],
    },
    Conversations: {
      type: [Schema.Types.ObjectId],
      ref: "Conversation",
      default: [],
    },
    Notification: {
      type : Number ,
      default: 0 ,
    }
  },
  { timestamps: true }
);

UserSchema.set("toJSON", { virtuals: true });

UserSchema.virtual("numberOfFollowers").get(function () {
  //console.log(this.Followers);
  return this?.Followers?.length || 0;
});


UserSchema.virtual("numberFollowingEvents").get(function () {
  //console.log(this.FollowingEvents);
  return this?.FollowingEvents?.length || 0;
});


module.exports = mongoose.model("User", UserSchema);
