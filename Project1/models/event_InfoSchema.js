const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventInfoSchema = Schema(
  {
    City : {
      type : mongoose.Schema.Types.Mixed ,
      default : {}
    },
    Country : {
      type : mongoose.Schema.Types.Mixed ,
      default : {}
    }
    ,
    Category : {
      type : mongoose.Schema.Types.Mixed ,
      default : {}
    }
    ,
    Topics: {
      type : mongoose.Schema.Types.Mixed ,
      default : {}
    }
    ,
    


  },
  { timestamps: true }
);

module.exports = mongoose.model("EventInfo", EventInfoSchema);
