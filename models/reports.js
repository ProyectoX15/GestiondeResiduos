const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportSchema = new Schema({
  Report: String,
});





module.exports = mongoose.model("reports", reportSchema);