const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanyInfoSchema = Schema(
  {
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

module.exports = mongoose.model("CompanyInfo", CompanyInfoSchema);
