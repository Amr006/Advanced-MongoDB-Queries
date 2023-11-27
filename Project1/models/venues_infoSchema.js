const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VenuesInfoSchema = Schema(
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

  },
  { timestamps: true }
);

module.exports = mongoose.model("VenuesInfo", VenuesInfoSchema);
