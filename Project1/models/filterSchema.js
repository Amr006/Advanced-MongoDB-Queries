const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FilterSchema = Schema(
  {
    Name : {
      type : String ,
    },
    
    City : {
      type : String ,
    }
    ,
    Category: {
      type : String ,
    },
    Topic : {
      type : String 
    },
    Rating : {
      type : String 

    },
    Fee : {
      type : String 

    },
    Members: {
      type : String 

    },
    Format : {
      type : String 

    },
    Month : {
      type : String 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Filter", FilterSchema);
